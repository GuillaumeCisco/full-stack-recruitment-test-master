import React from 'react';

import Bell from './bell';
import './index.scss';

const Controls = () => <div className="controls">
    <button className="price"><Bell/><span>Price Alerts</span></button>
    <button>Filter</button>
    <button>Sort</button>
</div>;

export default Controls;