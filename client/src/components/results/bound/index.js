import React from 'react';
import './index.scss';
import Arrow from '../../icons/arrow';

const getTime = (date) => {
    date = new Date(date);
    return `${date.getHours()}:${date.getMinutes()}`;
};

const Bound = ({item}) => <div className="bound">
    <ul>{item.Segments.map(o => <li key={o.Id}>
        <img src={item.Carrier.ImageUrl} alt={o.Carrier.Displaycode}/>
        <div>
            <span>{getTime(o.DepartureDateTime)}</span>
            <span className="code">{o.OriginStation.Code}</span>
        </div>
        <Arrow/>
        <div>
            <span>{getTime(o.ArrivalDateTime)}</span>
            <span className="code">{o.DestinationStation.Code}</span>
        </div>
    </li>)}
    </ul>
    <div className="info">
        <div className="wrapper">
            <span className="duration">{item.Duration}</span>
            <span className="stop">{!item.Stops.length ? 'Direct' : `${item.Stops.length} stops`}</span>
        </div>
    </div>
</div>;

export default Bound;