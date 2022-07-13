import React from 'react';
import ReactSelect, { components, GroupBase } from 'react-select';
import './style.less';
import { CaretDownIcon, CheckedIcon } from '@icons';

interface IOption {
  isSelected: boolean;
  label: string;
}

const Option = ({ isSelected, label, ...props }: IOption) => (
  <components.Option {...props}>
    <input type="checkbox" checked={isSelected} onChange={() => {}} />
    <span className="custom-checkbox">
      <CheckedIcon />
    </span>
    {label}
  </components.Option>
);
const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <CaretDownIcon />
  </components.DropdownIndicator>
);

interface IMySelect {
  value: string[];
  options: GroupBase<string>[];
  onChange: (arg?: any) => void;
  [key: string]: any;
}

export const Select = ({ value, options, onChange, ...props }: IMySelect) => {
  return (
    <ReactSelect
      value={value}
      options={options}
      onChange={onChange}
      classNamePrefix="select"
      className="select"
      closeMenuOnSelect={false}
      isMulti={true}
      isSearchable={false}
      hideSelectedOptions={false}
      components={{ Option, DropdownIndicator }}
      {...props}
    />
  );
};
