export interface IMovie {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: string[];
  runtime: number;
}

export interface IGenresList {
  label: string;
  value: string;
}

export interface ISortItems {
  id: number;
  value: string;
  name: string;
}

export interface IMoviesState {
  movies: IMovie[];
  genre: string;
  sortBy: string;
  selectedMovie?: IMovie;
  totalMovies: number;
  title?: string;
}

export type TAlertStatus = 'success' | 'error' | '';
export interface IAlert {
  text: string;
  status: TAlertStatus;
}

export interface IAppState {
  loading: boolean;
  alert: IAlert;
}

export interface IState {
  movies: IMoviesState;
  app: IAppState;
}
