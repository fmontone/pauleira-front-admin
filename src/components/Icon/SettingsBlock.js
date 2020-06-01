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
        <clipPath id="clip-settings-blocks">
          <rect width={size} height={size} />
        </clipPath>
      </defs>
      <g id="settings-blocks" clipPath="url(#clip-settings-blocks)">
        <path
          fill={color}
          id="União_1"
          data-name="União 1"
          d="M-776.6-40a.7.7,0,0,1-.7-.7v-4.9a.7.7,0,0,1,.7-.7h4.9a.7.7,0,0,1,.7.7v4.9a.7.7,0,0,1-.7.7Zm-7.7,0a.7.7,0,0,1-.7-.7v-4.9a.7.7,0,0,1,.7-.7h4.9a.7.7,0,0,1,.7.7v4.9a.7.7,0,0,1-.7.7Zm7.7-7.7a.7.7,0,0,1-.7-.7v-4.9a.7.7,0,0,1,.7-.7h4.9a.7.7,0,0,1,.7.7v4.9a.7.7,0,0,1-.7.7Zm-7.7,0a.7.7,0,0,1-.7-.7v-4.9a.7.7,0,0,1,.7-.7h4.9a.7.7,0,0,1,.7.7v4.9a.7.7,0,0,1-.7.7Z"
          transform="translate(790 59)"
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
