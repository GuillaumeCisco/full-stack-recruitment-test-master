import React from 'react';
import './index.scss';

import Bound from './bound';
import Price from './price';

const Results = ({results}) => {
    // display first price as we fon't know how to link PricingOptions to legs...
    
    return results && results.length ? <ul className="results">
        {results.map(o => <li className="box" key={o.Id}>
            <Bound item={o.OutboundLeg}/>
            <Bound item={o.InboundLeg}/>
            <Price item={o.PricingOptions[0]}/>
        </li>)}
    </ul> : <span>Loading...</span>;
};

export default Results;