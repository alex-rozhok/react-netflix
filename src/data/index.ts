import { IGenre, ISortItems } from '@interfaces';

export const genres: IGenre[] = [
  { id: 1, label: 'All', value: 'all', active: true },
  { id: 2, label: 'Documentary', value: 'documentary', active: false },
  { id: 3, label: 'Comedy', value: 'comedy', active: false },
  { id: 4, label: 'Horror', value: 'horror', active: false },
  { id: 5, label: 'Crime', value: 'crime', active: false },
];

export const sortItems: ISortItems[] = [
  { id: 1, value: 'release_date', name: 'RELEASE DATE' },
  { id: 2, value: 'vote_average', name: 'RATING' },
];
