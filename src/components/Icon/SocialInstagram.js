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
        <clipPath id="clip-social-instagram">
          <rect width={size} height={size} />
        </clipPath>
      </defs>
      <g id="social-instagram" clipPath="url(#clip-social-instagram)">
        <g
          id="Grupo_729"
          data-name="Grupo 729"
          transform="translate(-288.068 -1258.068)"
        >
          <g
            id="Grupo_281"
            data-name="Grupo 281"
            transform="translate(290 1260)"
          >
            <g id="Grupo_280" data-name="Grupo 280">
              <path
                fill={color}
                id="Caminho_833"
                data-name="Caminho 833"
                d="M13.843,0H6.292A6.293,6.293,0,0,0,0,6.292v7.551a6.293,6.293,0,0,0,6.292,6.292h7.551a6.293,6.293,0,0,0,6.292-6.292V6.292A6.293,6.293,0,0,0,13.843,0Zm4.4,13.843a4.41,4.41,0,0,1-4.4,4.4H6.292a4.41,4.41,0,0,1-4.4-4.4V6.292a4.41,4.41,0,0,1,4.4-4.4h7.551a4.41,4.41,0,0,1,4.4,4.4Z"
              />
            </g>
          </g>
          <g
            id="Grupo_283"
            data-name="Grupo 283"
            transform="translate(295.034 1265.034)"
          >
            <g id="Grupo_282" data-name="Grupo 282">
              <path
                fill={color}
                id="Caminho_834"
                data-name="Caminho 834"
                d="M133.034,128a5.034,5.034,0,1,0,5.034,5.034A5.034,5.034,0,0,0,133.034,128Zm0,8.18a3.146,3.146,0,1,1,3.146-3.146A3.151,3.151,0,0,1,133.034,136.18Z"
                transform="translate(-128 -128)"
              />
            </g>
          </g>
          <g
            id="Grupo_285"
            data-name="Grupo 285"
            transform="translate(304.809 1263.986)"
          >
            <g id="Grupo_284" data-name="Grupo 284">
              <circle
                fill={color}
                id="Elipse_1"
                data-name="Elipse 1"
                cx="0.671"
                cy="0.671"
                r="0.671"
              />
            </g>
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
