import { IGenresList, ISortItems } from '@interfaces';

export const genresList: IGenresList[] = [
  {
    label: 'Documentary',
    value: 'documentary',
  },
  {
    label: 'Comedy',
    value: 'comedy',
  },
  {
    label: 'Horror',
    value: 'horror',
  },
  {
    label: 'Crime',
    value: 'crime',
  },
];

export const filterTabs = [{ label: 'All', value: 'all' }, ...genresList];

export const sortItems: ISortItems[] = [
  { id: 1, value: 'release_date', name: 'RELEASE DATE' },
  { id: 2, value: 'vote_average', name: 'RATING' },
];
