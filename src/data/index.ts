import { IGenresList, ISortItems } from '@interfaces';

const genresList = ['Documentary', 'Comedy', 'Horror', 'Crime'];

export const selectOptions: IGenresList[] = genresList.map((genre) => ({
  label: genre,
  value: genre.toLowerCase(),
}));

export const filterTabs = [{ label: 'All', value: 'all' }, ...selectOptions];

export const sortItems: ISortItems[] = [
  { id: 1, value: 'release_date', name: 'RELEASE DATE' },
  { id: 2, value: 'vote_average', name: 'RATING' },
];
