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
        <clipPath id="clip-color-waze">
          <rect width={size} height={size} />
        </clipPath>
      </defs>
      <g id="color-waze" clipPath="url(#clip-color-waze)">
        <g
          id="Grupo_730"
          data-name="Grupo 730"
          transform="translate(-368 -1060)"
        >
          <rect
            id="Retângulo_344"
            data-name="Retângulo 344"
            width={size}
            height={size}
            transform="translate(368 1060)"
            fill="#fff"
            opacity="0"
          />
          <g id="Waze" transform="translate(367 1058.069)">
            <path
              id="Caminho_2640"
              data-name="Caminho 2640"
              d="M14.281,20.511c-8.43,0-10.238-2.278-11.011-3.251A1.163,1.163,0,0,1,3,16.516a1.176,1.176,0,0,1,1.175-1.175c.407,0,1.645,0,1.645-2.311v-.274C5.82,8.479,9.616,5,14.281,5s8.461,3.479,8.461,7.756S18.946,20.511,14.281,20.511Z"
              fill="#37474f"
            />
            <path
              id="Caminho_2641"
              data-name="Caminho 2641"
              d="M15.341,20.631c4.147,0,7.521-3.058,7.521-6.815S19.487,7,15.341,7,7.82,10.058,7.82,13.815v.274c0,2.934-1.808,3.251-2.585,3.251A.235.235,0,0,0,5,17.576a.226.226,0,0,0,.057.149C5.754,18.6,7.365,20.631,15.341,20.631Z"
              transform="translate(-1.06 -1.06)"
              fill="#eceff1"
            />
            <circle
              id="Elipse_32"
              data-name="Elipse 32"
              cx="0.893"
              cy="0.893"
              r="0.893"
              transform="translate(15.55 10.358)"
              fill="#37474f"
            />
            <circle
              id="Elipse_33"
              data-name="Elipse 33"
              cx="0.893"
              cy="0.893"
              r="0.893"
              transform="translate(11.085 10.358)"
              fill="#37474f"
            />
            <path
              id="Caminho_2642"
              data-name="Caminho 2642"
              d="M26.64,23.5a2.686,2.686,0,0,1-2.82,2.115A2.686,2.686,0,0,1,21,23.5"
              transform="translate(-9.539 -9.804)"
              fill="none"
              stroke="#37474f"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="1"
            />
            <circle
              id="Elipse_36"
              data-name="Elipse 36"
              cx="2.233"
              cy="2.233"
              r="2.233"
              transform="translate(14.657 18.396)"
              fill="#37474f"
            />
            <circle
              id="Elipse_58"
              data-name="Elipse 58"
              cx="2.233"
              cy="2.233"
              r="2.233"
              transform="translate(8.405 18.396)"
              fill="#37474f"
            />
            <circle
              id="Elipse_37"
              data-name="Elipse 37"
              cx="0.447"
              cy="0.447"
              r="0.447"
              transform="translate(16.443 20.182)"
              fill="#607d8b"
            />
            <circle
              id="Elipse_59"
              data-name="Elipse 59"
              cx="0.447"
              cy="0.447"
              r="0.447"
              transform="translate(10.192 20.182)"
              fill="#607d8b"
            />
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
