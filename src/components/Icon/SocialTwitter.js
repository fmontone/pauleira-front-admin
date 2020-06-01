import React from 'react';
import PropTypes from 'prop-types';

import colors from '~/styles/colors';

const SVG = ({ color, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <defs>
        <clipPath id="clip-social-twitter">
          <rect width={size} height={size} />
        </clipPath>
      </defs>
      <g id="social-twitter" clipPath="url(#clip-social-twitter)">
        <path
          fill={color}
          id="Caminho_419"
          data-name="Caminho 419"
          d="M242.541,1143.638v.36a8.141,8.141,0,0,1-.517,2.819,8.4,8.4,0,0,1-1.535,2.569,7.615,7.615,0,0,1-2.506,1.88,8.176,8.176,0,0,1-3.43.72,8.017,8.017,0,0,1-2.287-.329,7.775,7.775,0,0,1-2.036-.924q.329.032.674.031a5.592,5.592,0,0,0,1.864-.313,5.843,5.843,0,0,0,1.629-.877,2.814,2.814,0,0,1-1.629-.572,2.713,2.713,0,0,1-.987-1.386,2.8,2.8,0,0,0,.517.047,2.9,2.9,0,0,0,.736-.094,2.718,2.718,0,0,1-1.143-.525,2.791,2.791,0,0,1-.807-.987,2.932,2.932,0,0,1-.305-1.245v-.047a2.638,2.638,0,0,0,1.284.36,2.831,2.831,0,0,1-.916-1.01,2.752,2.752,0,0,1-.337-1.339,2.8,2.8,0,0,1,.376-1.41,8.032,8.032,0,0,0,5.8,2.944,3.255,3.255,0,0,1-.063-.642,2.741,2.741,0,0,1,.376-1.41,2.838,2.838,0,0,1,1.026-1.026,2.71,2.71,0,0,1,1.4-.384,2.788,2.788,0,0,1,2.052.893,5.467,5.467,0,0,0,1.786-.689,2.722,2.722,0,0,1-.478.9,2.893,2.893,0,0,1-.76.666,5.72,5.72,0,0,0,1.629-.454A5.891,5.891,0,0,1,242.541,1143.638Z"
          transform="translate(-225.23 -1134.849)"
        />
      </g>
    </svg>
  );
};

export default SVG;

SVG.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

SVG.defaultProps = {
  color: colors.black,
  size: '24',
};
