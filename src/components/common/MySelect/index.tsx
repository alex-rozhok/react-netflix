import React from 'react';
import Select, { components } from 'react-select';
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
  [key: string]: any;
}

export const MySelect = ({ value, ...props }: IMySelect) => {
  const selectedValue = value.reduce((res, item) => {
    res.push({ label: item, value: item.toLowerCase().replace(/ /g, '-') });
    return res;
  }, []);

  return (
    <Select
      classNamePrefix="select"
      className="select"
      closeMenuOnSelect={false}
      value={selectedValue}
      isMulti={true}
      isSearchable={false}
      hideSelectedOptions={false}
      components={{ Option, DropdownIndicator }}
      {...props}
    />
  );
};
