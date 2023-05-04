import {SVGFile} from '@shared/model';

export interface InputGroupProps {
  label: string;
  required?: boolean;
  placeholder: string;
  icon?: SVGFile;
  type?: string;
  name: string;
  value: string | number | string[] | undefined;
  error: string | false | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  as?: 'input' | 'textarea';
  rows?: number;
  mb?: number;
}