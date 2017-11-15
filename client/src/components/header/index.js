import React from 'react';
import './index.scss';

import Arrow from '../icons/arrow';

const Header = ({fromPlace, toPlace, adults, cabinClass}) => <div className="topHeader">
    <span className="place">{fromPlace}</span>
    <span className="arrow"><Arrow color={'#fff'} width={40} height={40}/></span>
    <span className="place">{toPlace}</span>
    <div>
        <span>{adults} travellers, {cabinClass}</span>
    </div>
</div>;

export default Header;