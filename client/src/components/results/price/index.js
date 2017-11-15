import React from 'react';
import './index.scss';

const Price = ({item}) => <div className="priceBox">
    <button>Select</button>
    <span className="price">£{item.Price}</span>
    <span className="name">{item.Agents[0].Name}</span>
</div>;

export default Price;