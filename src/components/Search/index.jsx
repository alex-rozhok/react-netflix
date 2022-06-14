import React, { useState } from 'react';
import { Button, Input } from '@components';
import styles from './style.module.less';

export const Search = () => {
  const [value, setValue] = useState('');
  const handlerSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className={styles.search} onSubmit={handlerSubmit}>
      <h1 className={styles.search__title}>FIND YOUR MOVIE</h1>
      <div className={styles.search__row}>
        <Input
          placeholder="What do you want to watch?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button type="submit" view="main">
          SEARCH
        </Button>
      </div>
    </form>
  );
};
