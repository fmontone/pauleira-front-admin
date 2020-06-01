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
        <clipPath id="clip-social-facebook">
          <rect width={size} height={size} />
        </clipPath>
      </defs>
      <g id="social-facebook" clipPath="url(#clip-social-facebook)">
        <path
          fill={color}
          id="facebook"
          d="M20.068,10.034a10.034,10.034,0,1,0-11.6,9.912V12.934H5.918v-2.9H8.466V7.823a3.541,3.541,0,0,1,3.79-3.9,15.431,15.431,0,0,1,2.246.2V6.585H13.237A1.45,1.45,0,0,0,11.6,8.152v1.882h2.783l-.445,2.9H11.6v7.012A10.036,10.036,0,0,0,20.068,10.034Z"
          transform="translate(2 2)"
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
