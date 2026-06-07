export type MovieId = number | string;

export type MovieGenre = {
  id: number;
  name: string;
};

export type MovieSummary = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  softcore?: boolean;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type RatedMovieSummary = MovieSummary & {
  rating: number;
};

export type MovieListResponse = {
  page: number;
  results: MovieSummary[];
  total_pages: number;
  total_results: number;
};

export type MovieCollection = {
  id: number;
  name: string;
  poster_path: string | null;
  backdrop_path: string | null;
};

export type ProductionCompany = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

export type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

export type SpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type MovieDetail = Omit<MovieSummary, "genre_ids"> & {
  belongs_to_collection: MovieCollection | null;
  budget: number;
  genres: MovieGenre[];
  homepage: string | null;
  imdb_id: string | null;
  origin_country: string[];
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  revenue: number;
  runtime: number | null;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string | null;
};

export type GuestSessionResponse = {
  success: boolean;
  guest_session_id: string;
  expires_at: string;
};

export type RatingRequest = {
  value: number;
};

export type RatingResponse = {
  success: boolean;
  status_code: number;
  status_message: string;
};

export type RatedMoviesResponse = {
  page: number;
  results: RatedMovieSummary[];
  total_pages: number;
  total_results: number;
};

export type DeleteRatingResponse = RatingResponse;

export type TmdbErrorResponse = {
  success?: false;
  status_code: number;
  status_message: string;
};

export type DiscoverMovieParams = {
  page?: number;
  sort_by?: string;
  include_adult?: boolean;
  include_video?: boolean;
  language?: string;
  region?: string;
  primary_release_year?: number;
  year?: number;
  with_genres?: string;
};

export type RatedMoviesParams = {
  page?: number;
  language?: string;
  sort_by?: string;
};
