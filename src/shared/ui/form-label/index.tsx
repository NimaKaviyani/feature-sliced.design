import React from 'react';
import {Form} from 'react-bootstrap';
import {FormLabelProps} from '@shared/ui/form-label/types';

const FormLabel = ({label, required, name}: FormLabelProps) => {
  return (
    <Form.Label htmlFor={name}>
      {label}{required && <span className='text-danger'>*</span>}
    </Form.Label>
  );
};

export default FormLabel;