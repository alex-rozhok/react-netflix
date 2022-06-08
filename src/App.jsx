import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Hero, Movies, Footer, FilterBar, ErrorBoundary } from './components';
import './styles/style.less';

let data = [
  {
    id: 1,
    title: 'Star Wars: The Last Jedi',
    genres: ['Fantasy', 'Adventure', 'Science Fiction'],
    release_date: '2017',
    poster_path:
      'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
    href: '#',
  },
  {
    id: 2,
    title: 'Black Panther',
    genres: ['Action', 'Adventure', 'Fantasy', 'Science Fiction'],
    release_date: '2018',
    poster_path:
      'https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
    href: '#',
  },
  {
    id: 3,
    title: 'Coco',
    genres: ['Adventure', 'Comedy', 'Family', 'Animation'],
    release_date: '2019',
    poster_path:
      'https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg',
    href: '#',
  },
  {
    id: 4,
    title: 'Ready Player One',
    genres: ['Adventure', 'Science Fiction', 'Action'],
    release_date: '2018',
    poster_path:
      'https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg',
    href: '#',
  },
  {
    id: 5,
    title: 'Tomb Raider',
    genres: ['Action', 'Adventure'],
    release_date: '2018',
    poster_path:
      'https://image.tmdb.org/t/p/w500/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg',
    href: '#',
  },
  {
    id: 6,
    title: 'Thor: Ragnarok',
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
genresArr.unshift('All');
let genres = genresArr.reduce((res, item) => {
  res.push({ name: item, active: item === 'All' });
  return res;
}, []);

function App() {
  const [moviesData, setMoviesData] = useState(data);
  const [moviesState, setMoviesState] = useState(moviesData);
  const [genresState, setGenresState] = useState(genres);
  const currentFilter = useRef('All');
  const [sortBy, setSortBy] = useState('release_date');

  const filterMovies = useCallback(
    (selectedGenre) => {
      const filteredMovies =
        selectedGenre === 'All'
          ? moviesData
          : moviesData.filter((movie) => movie.genres.includes(selectedGenre));
      setMoviesState(filteredMovies);
    },
    [moviesData],
  );
  const changeFilter = (clickedGenre) => {
    if (currentFilter.current === clickedGenre) {
      return;
    } else {
      currentFilter.current = clickedGenre;
      const changedGenre = genresState.map((genre) => {
        return genre.name === clickedGenre
          ? { ...genre, active: true }
          : { ...genre, active: false };
      });
      setGenresState(changedGenre);
      filterMovies(clickedGenre);
    }
  };

  useEffect(() => {
    filterMovies(currentFilter.current);
  }, [moviesData, filterMovies]);

  return (
    <>
      <Hero />
      <main className="main">
        <FilterBar
          genres={genresState}
          changeFilter={changeFilter}
          changeSort={setSortBy}
          sortBy={sortBy}
        />
        <ErrorBoundary>
          <Movies
            movies={moviesState}
            sortBy={sortBy}
            setMoviesData={setMoviesData}
          />
        </ErrorBoundary>
      </main>
      <Footer />
    </>
  );
}

export default App;
