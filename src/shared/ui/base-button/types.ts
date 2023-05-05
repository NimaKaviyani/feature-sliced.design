import {ButtonProps} from 'react-bootstrap/Button';
import {ReactNode} from 'react';

export interface BaseButtonProps extends ButtonProps {
  children: ReactNode;
}