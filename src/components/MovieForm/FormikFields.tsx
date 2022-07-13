import React from 'react';
import { ErrorMessage, useField } from 'formik';
import { GroupBase } from 'react-select';
import { Input, Label, Textarea, Select, DatePicker } from '@components';
import { TextError } from './TextError';

interface IFormikField {
  label: string;
  name: string;
  id?: string;
  [key: string]: any;
}

interface IFormikInput extends IFormikField {
  type: 'text' | 'number';
}
interface IFormikSelect extends IFormikField {
  options: GroupBase<string>[];
}

export const FormikInput = ({ label, ...props }: IFormikInput) => {
  const [field] = useField(props);
  const id = props.id || props.name;

  return (
    <Label target={id}>
      {label}
      <>
        <Input id={id} {...field} {...props} />
        <ErrorMessage name={props.name} component={TextError} />
      </>
    </Label>
  );
};

export const FormikTextArea = ({ label, ...props }: IFormikField) => {
  const [field] = useField(props);
  const id = props.id || props.name;

  return (
    <Label target={id}>
      {label}
      <>
        <Textarea id={id} {...field} {...props} />
        <ErrorMessage name={props.name} component={TextError} />
      </>
    </Label>
  );
};

export const FormikSelect = ({ label, options, ...props }: IFormikSelect) => {
  const [field] = useField(props);
  const id = props.id || props.name;

  return (
    <Label target={id}>
      {label}
      <>
        <Select options={options} id={id} {...field} {...props} />
        <ErrorMessage name={props.name} component={TextError} />
      </>
    </Label>
  );
};

export const FormikDatePicker = ({ label, ...props }: IFormikField) => {
  const [field] = useField(props);
  const id = props.id || props.name;

  return (
    <Label target={id}>
      {label}
      <>
        <DatePicker id={id} {...field} {...props} />
        <ErrorMessage name={props.name} component={TextError} />
      </>
    </Label>
  );
};
