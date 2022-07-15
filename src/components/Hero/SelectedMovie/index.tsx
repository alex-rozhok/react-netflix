import React, { ReactElement, useEffect } from 'react';
import { Logo, Loader, Button } from '@components';
import { SearchIcon } from '@icons';
import { useAction, useMoviesState } from '@hooks';
import { useSearchParams } from 'react-router-dom';
import { Movie } from './Movie';

interface ISelectedMovies {
  movieId: number;
}

export const SelectedMovie = ({ movieId }: ISelectedMovies): ReactElement => {
  const { fetchMovieById, selectMovieAction } = useAction();
  const { selectedMovie } = useMoviesState();
  const [searchParams, setSearchParams] = useSearchParams();

  const handlerClick = () => {
    searchParams.delete('movie');
    setSearchParams(searchParams);
    selectMovieAction();
  };

  useEffect(() => {
    fetchMovieById(movieId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);
  return (
    <>
      <div className="row space-between">
        <Logo />
        <Button view="icon" onClick={handlerClick}>
          <SearchIcon />
        </Button>
      </div>
      {selectedMovie ? <Movie selectedMovie={selectedMovie} /> : <Loader />}
    </>
  );
};
