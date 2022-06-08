import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.less';
import { Calendar } from '../../icons';
import { Input, Label, Textarea } from '../../UI';

export const MovieForm = ({ id }) => {
  const [value, setValue] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();
  };

  const handlerReset = () => {
    setValue('');
  };

  return (
    <form
      id={id}
      onSubmit={handlerSubmit}
      onReset={handlerReset}
      className={styles.form}
    >
      <Label label="TITLE">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Title"
        />
      </Label>
      <Label label="RELEASE DATE">
        <Input
          value=""
          onChange={() => {}}
          placeholder="Select Date"
          icon={<Calendar />}
        />
      </Label>
      <Label label="MOVIE URL">
        <Input value="" onChange={() => {}} placeholder="https://" />
      </Label>
      <Label label="RATING">
        <Input
          value=""
          onChange={() => {}}
          placeholder="9.9"
          type="number"
          max={10}
          min={0}
        />
      </Label>
      <Label label="GENRE">
        <Input value="" onChange={() => {}} placeholder="Select Genre" />
      </Label>
      <Label label="RUNTIME">
        <Input
          value=""
          onChange={() => {}}
          placeholder="Minutes"
          type="number"
        />
      </Label>
      <div className={styles.form__full_field}>
        <Label label="OVERVIEW">
          <Textarea
            value=""
            onChange={() => {}}
            placeholder="Movie description"
          />
        </Label>
      </div>
    </form>
  );
};

MovieForm.propTypes = {
  id: PropTypes.string,
};
