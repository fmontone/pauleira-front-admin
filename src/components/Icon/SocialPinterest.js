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
        <clipPath id="clip-social-pinterest">
          <rect width={size} height={size} />
        </clipPath>
      </defs>
      <g id="social-pinterest" clipPath="url(#clip-social-pinterest)">
        <path
          fill={color}
          id="Caminho_390"
          data-name="Caminho 390"
          d="M315.137,778.73a5.063,5.063,0,0,1,1.937,1.832,4.672,4.672,0,0,1,.7,2.46,7.581,7.581,0,0,1-.6,3.08,5.145,5.145,0,0,1-1.649,2.137,4.1,4.1,0,0,1-2.478.8,2.759,2.759,0,0,1-1.309-.322,1.856,1.856,0,0,1-.838-.777l-.611,2.408a7.4,7.4,0,0,1-.907,1.92q-.227.366-.681.96a.135.135,0,0,1-.131.034.085.085,0,0,1-.079-.087,9.541,9.541,0,0,1,.017-3.333l1.135-4.781-.07-.174a2.963,2.963,0,0,1-.14-.489,3.664,3.664,0,0,1-.07-.715,2.848,2.848,0,0,1,.227-1.16,2.114,2.114,0,0,1,.61-.82,1.342,1.342,0,0,1,.855-.305,1.065,1.065,0,0,1,.89.4,1.318,1.318,0,0,1,.28.925,3.927,3.927,0,0,1-.14.907q-.069.314-.314,1.082-.209.715-.315,1.117a1.394,1.394,0,0,0,.052.846,1.275,1.275,0,0,0,.515.619,1.477,1.477,0,0,0,.811.227,2.021,2.021,0,0,0,1.466-.646,4.233,4.233,0,0,0,.969-1.683,7.334,7.334,0,0,0,.358-2.33,3.478,3.478,0,0,0-.428-1.736,2.935,2.935,0,0,0-1.23-1.177,4.187,4.187,0,0,0-1.99-.454,4.372,4.372,0,0,0-2.3.61,3.943,3.943,0,0,0-1.492,1.518,4.215,4.215,0,0,0-.532,2.077,2.624,2.624,0,0,0,.575,1.728.7.7,0,0,1,.148.227.58.58,0,0,1-.009.262l-.192.7a.3.3,0,0,1-.157.218.356.356,0,0,1-.28.009,2.628,2.628,0,0,1-1.344-1.309,4.408,4.408,0,0,1-.453-2.06,4.939,4.939,0,0,1,.7-2.513,5.657,5.657,0,0,1,2.094-2.094,6.878,6.878,0,0,1,3.49-.872A5.85,5.85,0,0,1,315.137,778.73Z"
          transform="translate(-299.941 -773.998)"
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
