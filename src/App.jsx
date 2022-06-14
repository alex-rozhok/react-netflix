import React, { useCallback, useEffect, useReducer, useRef } from 'react';
import './styles/style.less';
import { Hero, Movies, Footer, FilterBar, ErrorBoundary } from '@components';
import { reducer } from './reducer/reducer';
import {
  deleteAction,
  genresAction,
  moviesAction,
  sortAction,
  changeMoviesDataAction,
} from './reducer/actions';

let data = [
  {
    id: 1,
    title: 'Star Wars: The Last Jedi',
    overview: 'movie overview',
    genres: ['Fantasy', 'Adventure', 'Science Fiction'],
    release_date: '2017',
    poster_path:
      'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
    href: '#',
  },
  {
    id: 2,
    title: 'Black Panther',
    overview: 'movie overview',
    genres: ['Action', 'Adventure', 'Fantasy', 'Science Fiction'],
    release_date: '2018',
    poster_path:
      'https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
    href: '#',
  },
  {
    id: 3,
    title: 'Coco',
    overview: 'movie overview',
    genres: ['Adventure', 'Comedy', 'Family', 'Animation'],
    release_date: '2019',
    poster_path:
      'https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg',
    href: '#',
  },
  {
    id: 4,
    title: 'Ready Player One',
    overview: 'movie overview',
    genres: ['Adventure', 'Science Fiction', 'Action'],
    release_date: '2018',
    poster_path:
      'https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg',
    href: '#',
  },
  {
    id: 5,
    title: 'Tomb Raider',
    overview: 'movie overview',
    genres: ['Action', 'Adventure'],
    release_date: '2018',
    poster_path:
      'https://image.tmdb.org/t/p/w500/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg',
    href: '#',
  },
  {
    id: 6,
    title: 'Thor: Ragnarok',
    overview: 'movie overview',
    genres: ['Action', 'Adventure', 'Fantasy'],
    release_date: '2017',
    poster_path:
      'https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg',
    href: '#',
  },
];

let genresArr = [];
data.forEach((item) => {
  genresArr = [...genresArr, ...item.genres];
});

genresArr = Array.from(new Set(genresArr)).sort();
let genres = genresArr.reduce(
  (res, item) => {
    res.push({ name: item, active: false });
    return res;
  },
  [{ name: 'All', active: true }],
);

const initialState = {
  data,
  movies: data,
  sort: 'release_date',
  genres,
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const currentFilter = useRef('All');

  const filterMovies = useCallback(
    (selectedGenre) => {
      const filteredMovies =
        selectedGenre === 'All'
          ? state.data
          : state.data.filter((movie) => movie.genres.includes(selectedGenre));
      dispatch(moviesAction(filteredMovies));
    },
    [state.data],
  );
  const changeFilter = (clickedGenre) => {
    if (currentFilter.current === clickedGenre) {
      return;
    } else {
      currentFilter.current = clickedGenre;
      const changedGenre = state.genres.map((genre) => {
        return genre.name === clickedGenre
          ? { ...genre, active: true }
          : { ...genre, active: false };
      });
      dispatch(genresAction(changedGenre));
      filterMovies(clickedGenre);
    }
  };

  useEffect(() => {
    filterMovies(currentFilter.current);
  }, [filterMovies]);

  const changeSort = (payload) => {
    payload === state.sort ? null : dispatch(sortAction(payload));
  };
  const deleteMovie = (payload) => dispatch(deleteAction(payload));
  const changeMoviesData = (payload) => {
    dispatch(changeMoviesDataAction(payload));
  };

  return (
    <>
      <Hero changeMoviesData={changeMoviesData} />
      <main className="main">
        <FilterBar
          genres={state.genres}
          changeFilter={changeFilter}
          changeSort={changeSort}
          sortBy={state.sort}
        />
        <ErrorBoundary>
          <Movies
            movies={state.movies}
            sortBy={state.sort}
            deleteMovie={deleteMovie}
            changeMoviesData={changeMoviesData}
          />
        </ErrorBoundary>
      </main>
      <Footer />
    </>
  );
};

export default App;
