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
        <clipPath id="clip-social-linkedin">
          <rect width={size} height={size} />
        </clipPath>
      </defs>
      <g id="social-linkedin" clipPath="url(#clip-social-linkedin)">
        <path
          fill={color}
          id="União_2"
          data-name="União 2"
          d="M-80.457-29.453H-83.88v-5.378c0-1.282-.027-2.925-1.784-2.925-1.784,0-2.056,1.392-2.056,2.833v5.47h-3.427V-40.5h3.291v1.507h.048a3.6,3.6,0,0,1,3.245-1.784c3.471,0,4.11,2.287,4.11,5.256v6.069Zm-16.269,0V-40.5h3.43v11.047ZM-97-44.013A1.988,1.988,0,0,1-95.013-46a1.989,1.989,0,0,1,1.987,1.987,2,2,0,0,1-1.987,2.005A2,2,0,0,1-97-44.013Z"
          transform="translate(101 50)"
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
