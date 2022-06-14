import { IMovie, IGenre } from '@types';

/* eslint-disable max-len */
export const data: IMovie[] = [
  {
    id: 1,
    title: 'Star Wars: The Last Jedi',
    overview:
      'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
    genres: ['Fantasy', 'Adventure', 'Science Fiction'],
    release_date: '2017',
    poster_path:
      'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
    href: '#',
    rating: '9.0',
    runtime: '94',
  },
  {
    id: 2,
    title: 'Black Panther',
    overview:
      'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
    genres: ['Action', 'Adventure', 'Fantasy', 'Science Fiction'],
    release_date: '2018',
    poster_path:
      'https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
    href: '#',
    rating: '9.3',
    runtime: '87',
  },
  {
    id: 3,
    title: 'Coco',
    overview:
      'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
    genres: ['Adventure', 'Comedy', 'Family', 'Animation'],
    release_date: '2019',
    poster_path:
      'https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg',
    href: '#',
    rating: '8.7',
    runtime: '106',
  },
  {
    id: 4,
    title: 'Ready Player One',
    overview:
      'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
    genres: ['Adventure', 'Science Fiction', 'Action'],
    release_date: '2018',
    poster_path:
      'https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg',
    href: '#',
    rating: '8.0',
    runtime: '114',
  },
  {
    id: 5,
    title: 'Tomb Raider',
    overview:
      'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
    genres: ['Action', 'Adventure'],
    release_date: '2018',
    poster_path:
      'https://image.tmdb.org/t/p/w500/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg',
    href: '#',
    rating: '8.4',
    runtime: '124',
  },
  {
    id: 6,
    title: 'Thor: Ragnarok',
    overview:
      'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
    genres: ['Action', 'Adventure', 'Fantasy'],
    release_date: '2017',
    poster_path:
      'https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg',
    href: '#',
    rating: '8.9',
    runtime: '78',
  },
];

export const genres: IGenre[] = [
  { name: 'All', active: true },
  { name: 'Action', active: false },
  { name: 'Adventure', active: false },
  { name: 'Animation', active: false },
  { name: 'Comedy', active: false },
  { name: 'Family', active: false },
  { name: 'Fantasy', active: false },
  { name: 'Science Fiction', active: false },
];
