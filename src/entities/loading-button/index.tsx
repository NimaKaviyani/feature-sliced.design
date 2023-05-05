import React from 'react';
import BaseButton from '@shared/ui/base-button';
import {LoadingButtonProps} from './types';
import LoadingSpinner from '@shared/ui/loading-spinner';

const LoadingButton = ({children, active, type, variant, size, as, className, disabled, loading,}: LoadingButtonProps) => {
  return (
    <BaseButton
      variant={variant}
      type={type}
      className={className}
      active={active}
      size={size}
      as={as}
      disabled={disabled || loading}
    >
      {loading ? <LoadingSpinner /> : children}
    </BaseButton>
  );
};

export default LoadingButton;