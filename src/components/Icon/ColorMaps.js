import React from 'react';
import PropTypes from 'prop-types';

const SVG = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <defs>
        <clipPath id="clip-color-maps">
          <rect width={size} height={size} />
        </clipPath>
      </defs>
      <g id="color-maps" clipPath="url(#clip-color-maps)">
        <g
          id="Grupo_731"
          data-name="Grupo 731"
          transform="translate(-397 -1060)"
        >
          <rect
            id="Retângulo_345"
            data-name="Retângulo 345"
            width={size}
            height={size}
            transform="translate(397 1060)"
            fill="#fff"
            opacity="0"
          />
          <g
            id="Grupo_562"
            data-name="Grupo 562"
            transform="translate(-651 705)"
          >
            <g id="surface1" transform="translate(1052 357)">
              <path
                id="Caminho_2643"
                data-name="Caminho 2643"
                d="M21.8,20.483V7.317A1.317,1.317,0,0,0,20.483,6H7.317A1.317,1.317,0,0,0,6,7.317V20.483A1.317,1.317,0,0,0,7.317,21.8H20.483A1.317,1.317,0,0,0,21.8,20.483Z"
                transform="translate(-6 -4.245)"
                fill="#1c9957"
              />
              <path
                id="Caminho_2644"
                data-name="Caminho 2644"
                d="M8.935,33.022H22.1c.727,0-6.583-7.022-6.583-7.022S8.208,33.022,8.935,33.022Z"
                transform="translate(-7.618 -15.467)"
                fill="#3e7bf1"
              />
              <path
                id="Caminho_2645"
                data-name="Caminho 2645"
                d="M33.022,22.1V8.935c0-.727-7.022,6.583-7.022,6.583S33.022,22.828,33.022,22.1Z"
                transform="translate(-17.223 -5.863)"
                fill="#cbccc9"
              />
              <path
                id="Caminho_2646"
                data-name="Caminho 2646"
                d="M30.022,31.338a1.317,1.317,0,0,0,1.317-1.317v-.108L24.425,23,23,24.425l6.914,6.914Z"
                transform="translate(-15.539 -13.784)"
                fill="#efefef"
              />
              <path
                id="Caminho_2647"
                data-name="Caminho 2647"
                d="M21.8,7.317A1.317,1.317,0,0,0,20.483,6h-.108L6,20.375v.108A1.317,1.317,0,0,0,7.317,21.8h.108L21.8,7.425Z"
                transform="translate(-6 -4.245)"
                fill="#ffd73d"
              />
              <path
                id="Caminho_2648"
                data-name="Caminho 2648"
                d="M30.389,2A4.389,4.389,0,0,0,26,6.389c0,2.99,3.363,4.08,4.1,8.712.048.3.051.5.293.5s.245-.206.293-.5c.732-4.632,4.1-5.723,4.1-8.712A4.389,4.389,0,0,0,30.389,2Z"
                transform="translate(-17.223 -2)"
                fill="#d73f35"
              />
              <path
                id="Caminho_2649"
                data-name="Caminho 2649"
                d="M35.572,10.036A1.536,1.536,0,1,1,34.036,8.5a1.536,1.536,0,0,1,1.536,1.536Z"
                transform="translate(-20.87 -5.647)"
                fill="#752622"
              />
              <path
                id="Caminho_2650"
                data-name="Caminho 2650"
                d="M11.405,9.988v.923H12.72a1.319,1.319,0,0,1-1.315.958,1.456,1.456,0,1,1,.946-2.561l.679-.678a2.414,2.414,0,1,0-1.625,4.2A2.266,2.266,0,0,0,13.68,9.992Z"
                transform="translate(-7.678 -5.367)"
                fill="#fff"
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
  size: PropTypes.string,
};

SVG.defaultProps = {
  size: '24',
};
