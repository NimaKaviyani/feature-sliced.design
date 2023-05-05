import React, {ReactNode} from 'react';
import {Button} from 'react-bootstrap';
import {ButtonProps} from 'react-bootstrap/Button';

interface CustomButtonProps extends ButtonProps {
  children: ReactNode;
}

const BaseButton = ({children, active, type, variant, size, as, className, disabled}: CustomButtonProps) => {
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