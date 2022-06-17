export interface IMovie {
  id: number;
  title: string;
  overview: string;
  genres: string[];
  release_date: string;
  poster_path: string;
  href: string;
  rating: string;
  runtime: string;
}

export interface IGenre {
  name: string;
  active: boolean;
}

export interface IAppState {
  data: IMovie[];
  movies: IMovie[];
  genres: IGenre[];
  sort: string;
  selectedMovie: IMovie | null;
}
