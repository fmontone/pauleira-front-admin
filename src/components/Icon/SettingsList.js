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
        <clipPath id="clip-settings-list">
          <rect width={size} height={size} />
        </clipPath>
      </defs>
      <g id="settings-list" clipPath="url(#clip-settings-list)">
        <g
          id="Grupo_362"
          data-name="Grupo 362"
          transform="translate(-186.441 -285.427)"
        >
          <g
            id="baseline-view_list-24px"
            transform="translate(189.667 290.083)"
          >
            <path
              fill={color}
              id="Caminho_569"
              data-name="Caminho 569"
              d="M4,14.335H8.149V10.186H4Zm0,5.186H8.149V15.372H4ZM4,9.149H8.149V5H4Zm5.186,5.186H21.633V10.186H9.186Zm0,5.186H21.633V15.372H9.186ZM9.186,5V9.149H21.633V5Z"
              transform="translate(-4 -5)"
            />
          </g>
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
