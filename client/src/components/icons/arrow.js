import React from 'react';

const Arrow = ({color, width, height}) =>
    <svg width={width} height={height} viewBox="-10, 0, 50, 50">
        <path xmlns="http://www.w3.org/2000/svg"
              fill={color}
              d="M16.7,22.7l9-9c0.2-0.2,0.3-0.5,0.3-0.7c0-0.3-0.1-0.5-0.3-0.7l-9-9C16.5,3.1,16.3,3,16,3s-0.5,0.1-0.7,0.3l-1.4,1.4  c-0.4,0.4-0.4,1,0,1.4l4,4c0.3,0.3,0.1,0.9-0.4,0.9H1c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h16.6c0.4,0,0.7,0.5,0.4,0.9l-4,4  c-0.4,0.4-0.4,1,0,1.4l1.4,1.4c0.2,0.2,0.4,0.3,0.7,0.3C16.3,23,16.5,22.9,16.7,22.7z"/>
    </svg>;

Arrow.defaultProps = {
    color: '#B2AEBD',
    height: 30,
    width: 30,
};

export default Arrow;