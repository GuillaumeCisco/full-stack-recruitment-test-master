require('isomorphic-fetch');
require('es6-promise').polyfill();

const express = require('express');
const app = express();
const api = require('./api/');

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

/**
 Simple flight search api wrapper.

 TODO: client should provide params

 Api params and location values are here:
 http://business.skyscanner.net/portal/en-GB/Documentation/FlightsLivePricingQuickStart
 */

// formatted duration expressed in minutes to human readable duration
const formattedDuration = duration => {
    let res = '',
        minutes = duration;
    
    // if days
    const days = Math.floor(duration / (60 * 24));
    if (days) {
        res += `${days}d`;
        minutes = Math.floor(duration % (60 * 24));
    }
    
    // fill hours
    const hours = Math.floor(minutes / 60);
    minutes %= 60;

    res += `${days ? ' ': ''}${hours}h${minutes ? ` ${minutes}`: ''}`;
    return res;
};

const formattedLeg = (leg, results) => (
    {
        Id: leg.Id,
        Duration: formattedDuration(leg.Duration),
        Segments: leg.SegmentIds.map(segmentId => results.Segments.find(o => o.Id === segmentId)).map(o => ({
            ...o,
            Carrier: leg.Carriers.length ? results.Carriers.find(a => a.Id === o.Carrier) : null,
            OperatingCarrier: leg.Carriers.length ? results.Carriers.find(a => a.Id === o.OperatingCarrier) : null,
            Duration: formattedDuration(o.Duration),
            DestinationStation: results.Places.find(a => a.Id === o.DestinationStation),
            OriginStation: results.Places.find(a => a.Id === o.OriginStation),
        })),
        Stops: leg.Stops,
        Carrier: leg.Carriers.length ? results.Carriers.find(o => o.Id === leg.Carriers[0]) : null, // use first carrier
    }
);

app.get('/api/search', (req, res) => {

    // TODO, should paginate
    api.livePricing.search(req.query)
        .then((results) => {
            let Id = 0;
            let itineraries = results.Itineraries.map(o => {
                const inboundLeg = results.Legs.find(a => o.InboundLegId === a.Id),
                    outBoundLeg = results.Legs.find(a => o.OutboundLegId === a.Id);
                return {
                    Id: Id++, // arbitrary cause itinerary has no Id
                    InboundLeg: formattedLeg(inboundLeg, results),
                    OutboundLeg: formattedLeg(outBoundLeg, results),
                    PricingOptions: o.PricingOptions.map(o => ({
                        ...o,
                        Agents: o.Agents.map(o => results.Agents.find(a => o === a.Id)),
                    })),
                };
            });
            
            // fake pagination, return only the first ten results, should be done by the skyscanner API
            res.json(itineraries.slice(0, 10));
        })
        .catch(console.error);
});

app.listen(4000, () => {
    console.log('Node server listening on http://localhost:4000');
});
