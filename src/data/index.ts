import { IGenre, ISortItems } from '@interfaces';

export const genres: IGenre[] = [
  { id: 1, name: 'All', active: true },
  { id: 2, name: 'Documentary', active: false },
  { id: 3, name: 'Comedy', active: false },
  { id: 4, name: 'Horror', active: false },
  { id: 5, name: 'Crime', active: false },
];

export const sortItems: ISortItems[] = [
  { id: 1, value: 'release_date', name: 'RELEASE DATE' },
  { id: 2, value: 'vote_average', name: 'RATING' },
];
