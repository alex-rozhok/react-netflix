import {
  IGenresFilterTabs,
  IGenresSelectOptions,
  ISortItems,
} from '@interfaces';

const genresList = ['Documentary', 'Comedy', 'Horror', 'Crime'];

export const genresSelectOptions: IGenresSelectOptions[] = genresList.map(
  (genre) => ({
    label: genre,
    value: genre.toLowerCase().replace(/ /g, '-'),
  }),
);

export const genresFilterTabs: IGenresFilterTabs[] = genresSelectOptions.reduce(
  (filterTabs, genre, index) => {
    return [...filterTabs, { id: index + 2, ...genre }];
  },
  [{ id: 1, label: 'All', value: 'all' }],
);

export const genres = [
  { id: 1, label: 'All', value: 'all' },
  { id: 2, label: 'Documentary', value: 'documentary' },
  { id: 3, label: 'Comedy', value: 'comedy' },
  { id: 4, label: 'Horror', value: 'horror' },
  { id: 5, label: 'Crime', value: 'crime' },
];

export const sortItems: ISortItems[] = [
  { id: 1, value: 'release_date', name: 'RELEASE DATE' },
  { id: 2, value: 'vote_average', name: 'RATING' },
];
