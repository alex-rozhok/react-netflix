import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Input } from '@components';
import './style.less';
import { TextInput } from '../Field/Input';

interface IDatePickerProps {
  date: string | null;
  changeDate: (date: string) => void;
  icon?: React.ReactElement;
  id?: string;
}

export const MyDatePicker = ({
  date,
  changeDate,
  icon,
  id,
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
    changeDate(formatedDate(date));
  };

  const CustomInput = React.forwardRef<HTMLInputElement, TextInput>(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (props, ref): React.ReactElement => (
      <Input
        type="text"
        value={props.value}
        onChange={props.onChange}
        onClick={props.onClick}
        icon={icon}
        placeholder="Select Date"
        id={id}
      />
    ),
  );
  CustomInput.displayName = 'DatePicker';
  return (
    <DatePicker
      selected={date ? new Date(date) : null}
      onChange={changeHandler}
      dateFormat="yyyy-MM-dd"
      customInput={<CustomInput />}
      maxDate={new Date()}
    />
  );
};
