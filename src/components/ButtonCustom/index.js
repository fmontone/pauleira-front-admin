import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button, FeedBack } from './styles';
import colors from '~/styles/colors';

/**
 * @param {String('button'|'submit')} type
 * @param {String('regular*'|'CallToAction'|'Outline'|'Inactive'|'inactiveOutline')}  model
 * @param {String('small'|'regular'|'large')}  size
 * @param {String}  color // as in '~/src/styles/colors'
 * @param {String('auto'|'stretch')}  width
 */

export default function ButtonCustom({
  children,
  type,
  model,
  color,
  width,
  size,
  onClick,
  ...props
}) {
  const [feedback, setFeedback] = useState(false);

  function handleClick() {
    setFeedback(false);
    if (onClick) {
      onClick();
    }
  }

  return (
    <Button
      onClick={() => setFeedback(true)}
      type={type}
      model={model}
      size={size}
      color={color}
      width={width}
      {...props}
    >
      <span>{children}</span>
      {feedback && (
        <FeedBack
          className={feedback && 'animate'}
          onAnimationEnd={() => handleClick()}
          data-testid="custom-button-feedback"
        />
      )}
    </Button>
  );
}

ButtonCustom.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.element,
  ]).isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
  model: PropTypes.oneOf([
    'regular',
    'outline',
    'callToAction',
    'inactive',
    'inactiveOutline',
  ]),
  size: PropTypes.oneOf(['regular', 'small', 'large']),
  color: PropTypes.string,
  width: PropTypes.oneOf(['auto', 'stretch']),
  onClick: PropTypes.func,
};

ButtonCustom.defaultProps = {
  type: 'button',
  model: 'regular',
  size: 'regular',
  color: colors.primary,
  width: 'auto',
  onClick: null,
};
