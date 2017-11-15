import React from 'react';

const Bell = ({color, width, height}) =>
    <svg width={width} height={height}>
        <path xmlns="http://www.w3.org/2000/svg"
              fill={color}
              d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
    </svg>;

Bell.defaultProps = {
    color: '#00b2d6',
    height: 30,
    width: 30,
};

export default Bell;