import React from 'react';
import {Form, FormGroup, InputGroup} from 'react-bootstrap';
import Image from 'next/image';
import styles from '@styles/shared/input.module.scss';
import {FormInputProps} from './types';

const FormInput = ({required, placeholder, type, icon, name, value, error, onChange, onBlur, onFocus, as, rows = 1, mb, size, ...props}: FormInputProps) => {

  const Input = icon ? InputGroup : FormGroup;

  return (
      <Input className={styles.inputGroup} size={size} style={{...((mb || mb === 0) && {marginBottom: `${mb}rem`})}} hasValidation={required}>
        <Form.Control
          size={size}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          isInvalid={!!error}
          type={type ?? 'text'}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          aria-describedby={`${name}Append`}
          {...(as && {as})}
          {...(as && {rows})}
          {...props}
        />
        {icon &&
          <InputGroup.Text><Image src={icon.src} alt='input icon' width={20} height={20} id={`${name}Append`} /></InputGroup.Text>}
        {error && <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>}
      </Input>
  );
};

export default FormInput;