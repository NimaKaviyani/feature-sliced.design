import React from 'react';
import {Button} from 'react-bootstrap';
import {BaseButtonProps} from './types';

const BaseButton = ({children, active, type, variant, size, as, className, disabled}: BaseButtonProps) => {
  return (
    <Button
      variant={variant}
      type={type}
      className={className}
      active={active}
      size={size}
      as={as}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default BaseButton;