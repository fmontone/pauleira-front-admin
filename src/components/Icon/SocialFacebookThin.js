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
        <clipPath id="clip-social-facebook-thin">
          <rect width={size} height={size} />
        </clipPath>
      </defs>
      <g id="social-facebook-thin" clipPath="url(#clip-social-facebook-thin)">
        <path
          fill={color}
          id="Caminho_237"
          data-name="Caminho 237"
          d="M967.08,353.212h-2.174V361h-3.243v-7.788H960.13v-2.744h1.533v-1.782a3.855,3.855,0,0,1,.25-1.408,2.735,2.735,0,0,1,.98-1.3,3.422,3.422,0,0,1,2.031-.57l2.406.018V348.1h-1.747a.691.691,0,0,0-.445.143.75.75,0,0,0-.232.606v1.622h2.459Z"
          transform="translate(-952.13 -341.407)"
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
