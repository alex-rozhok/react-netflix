import React, { ReactElement } from 'react';

interface IMovieGenresProps {
  genres: string[];
}

export const MovieGenres = ({ genres }: IMovieGenresProps): ReactElement => (
  <p>{genres.length === 2 ? genres.join(' & ') : genres.join(', ')}</p>
);
