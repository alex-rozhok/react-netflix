import React, { FormEvent, ReactElement, useRef, useState } from 'react';
import { Button, Input } from '@components';
import styles from './style.module.less';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useAction } from '@hooks';

export const Search = (): ReactElement => {
  const { searchQuery = '' } = useParams();

  const { changeTitleSearchAction, fetchMoviesAction } = useAction();
  const navigate = useNavigate();
  const [value, setValue] = useState<string>(searchQuery);
  const [searchParams] = useSearchParams();

  const prevValue = useRef<string>(value);
  const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (prevValue.current !== value) {
      if (value) {
        changeTitleSearchAction(value);
      } else {
        changeTitleSearchAction('');
      }
      navigate(`/search/${value}?${searchParams}`);
      fetchMoviesAction();
      prevValue.current = value;
    }
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
