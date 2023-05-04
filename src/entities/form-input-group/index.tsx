import React from 'react';
import FormLabel from '@shared/ui/form-label';
import FormInput from '@shared/ui/form-input';
import {InputGroupProps} from '@entities/form-input-group/types';

const FormInputGroup = ({
                          label,
                          required,
                          placeholder,
                          type,
                          icon,
                          name,
                          value,
                          error,
                          onChange,
                          onBlur,
                          onFocus,
                          as,
                          rows,
                          mb,
                          ...props
                        }: InputGroupProps) => {
  return (
    <>
      <FormLabel
        label={label}
        name={name}
        required={required}
      />
      <FormInput
        required={required}
        placeholder={placeholder}
        type={type}
        icon={icon}
        name={name}
        value={value}
        error={error}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        as={as}
        rows={rows}
        mb={mb}
        {...props}
      />
    </>
  );
};

export default FormInputGroup;