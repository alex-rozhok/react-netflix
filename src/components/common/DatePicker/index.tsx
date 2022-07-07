import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Input } from '@components';
import './style.less';
import { ITextInput } from '../Field/Input';

interface IDatePickerProps {
  value: string | null;
  onChange: (date: string) => void;
  icon?: React.ReactElement;
  id?: string;
  name: string;
  placeholder?: string;
}

export const DatePicker = ({
  value,
  onChange,
  icon,
  id,
  placeholder,
}: IDatePickerProps): React.ReactElement => {
  const formatedDate = (date: Date): string => {
    const y = date.getFullYear();
    const m =
      date.getMonth() + 1 < 10
        ? '0' + (date.getMonth() + 1)
        : date.getMonth() + 1;

    const d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    return `${y}-${m}-${d}`;
  };

  const changeHandler = (date: Date) => {
    onChange(formatedDate(date));
  };

  const CustomInput = React.forwardRef<HTMLInputElement, ITextInput>(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (props, ref): React.ReactElement => (
      <Input
        type="text"
        value={props.value}
        onChange={props.onChange}
        onClick={props.onClick}
        icon={icon}
        id={id}
        placeholder={placeholder}
      />
    ),
  );
  CustomInput.displayName = 'DatePicker';
  return (
    <ReactDatePicker
      selected={value ? new Date(value) : null}
      onChange={changeHandler}
      dateFormat="yyyy-MM-dd"
      customInput={<CustomInput />}
      maxDate={new Date()}
    />
  );
};
