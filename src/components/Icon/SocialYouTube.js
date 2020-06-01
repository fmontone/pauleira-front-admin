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
        <clipPath id="clip-social-youtube">
          <rect width={size} height={size} />
        </clipPath>
      </defs>
      <g id="social-contact" clipPath="url(#clip-social-youtube)">
        <g
          id="Grupo_286"
          data-name="Grupo 286"
          transform="translate(1.569 4.703)"
        >
          <path
            fill={color}
            id="Caminho_835"
            data-name="Caminho 835"
            d="M19.628,81.358c-.556-.989-1.159-1.171-2.388-1.24S12.926,80,10.252,80s-5.767.035-6.993.117-1.831.251-2.392,1.241S0,84.047,0,87.043v.01c0,2.983.295,4.7.867,5.674S2.032,93.9,3.258,93.979s4.315.114,6.994.114,5.76-.042,6.989-.113,1.832-.263,2.388-1.252c.578-.978.87-2.692.87-5.674v-.01C20.5,84.047,20.207,82.346,19.628,81.358ZM7.687,90.89V83.2l6.406,3.844Z"
            transform="translate(0 -80)"
          />
        </g>
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
