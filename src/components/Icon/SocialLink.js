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
        <clipPath id="clip-social-link">
          <rect width={size} height={size} />
        </clipPath>
      </defs>
      <g id="social-link" clipPath="url(#clip-social-link)">
        <path
          fill={color}
          id="Caminho_954"
          data-name="Caminho 954"
          d="M3.267,10.333A2.068,2.068,0,0,1,5.333,8.267H8V7H5.333a3.333,3.333,0,1,0,0,6.667H8V12.4H5.333A2.068,2.068,0,0,1,3.267,10.333ZM6,11h5.333V9.667H6Zm6-4H9.333V8.267H12A2.067,2.067,0,1,1,12,12.4H9.333v1.267H12A3.333,3.333,0,1,0,12,7Z"
          transform="translate(-1.364 10.893) rotate(-45)"
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
