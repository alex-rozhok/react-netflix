import React, { FC } from 'react';

interface MovieGenresProps {
  genres: string[];
}

export const MovieGenres: FC<MovieGenresProps> = ({ genres }) => (
  <p>{genres.length === 2 ? genres.join(' & ') : genres.join(', ')}</p>
);
