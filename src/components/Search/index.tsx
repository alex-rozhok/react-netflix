import React, { FormEvent, ReactElement, useState } from 'react';
import { Button, Input } from '@components';
import styles from './style.module.less';

export const Search = (): ReactElement => {
  const [value, setValue] = useState<string>('');
  const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form className={styles.search} onSubmit={handlerSubmit}>
      <h1 className={styles.search__title}>FIND YOUR MOVIE</h1>
      <div className={styles.search__row}>
        <Input
          type="text"
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
