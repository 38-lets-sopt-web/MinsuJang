import type { MovieDetail, MovieId, MovieSummary } from "../types";
import { MOVIE_GENRE_NAME_BY_ID } from "../constants/genres";

export const MOVIE_LIST_PREVIEW: MovieSummary[] = [
  {
    adult: false,
    backdrop_path: "/8zLS8p1tRyWFLRFfmgQq0j5WE6z.jpg",
    genre_ids: [12, 28, 14],
    id: 564,
    title: "The Mummy",
    original_language: "en",
    original_title: "The Mummy",
    overview:
      "Dashing legionnaire Rick O'Connell stumbles upon the hidden ruins of Hamunaptra while in the midst of a battle to claim the area in 1920s Egypt.",
    popularity: 193.8418,
    poster_path: "/yhIsVvcUm7QxzLfT6HW2wLf5ajY.jpg",
    release_date: "1999-04-16",
    softcore: false,
    video: false,
    vote_average: 6.97,
    vote_count: 9974,
  },
  {
    adult: false,
    backdrop_path: "/u53UYu5XG2hNgWGvs3xGhAVzypl.jpg",
    genre_ids: [12, 16, 35, 10751, 878],
    id: 1327819,
    title: "Hoppers",
    original_language: "en",
    original_title: "Hoppers",
    overview:
      "Scientists have discovered how to hop human consciousness into lifelike robotic animals, allowing people to communicate with animals as animals.",
    popularity: 125.0523,
    poster_path: "/xjtWQ2CL1mpmMNwuU5HeS4Iuwuu.jpg",
    release_date: "2026-03-04",
    softcore: false,
    video: false,
    vote_average: 8.083,
    vote_count: 1157,
  },
  {
    adult: false,
    backdrop_path: "/2I1OFQJ0L9T0dpU6FobKFWV2PxX.jpg",
    genre_ids: [878, 12],
    id: 687163,
    title: "Project Hail Mary",
    original_language: "en",
    original_title: "Project Hail Mary",
    overview:
      "Science teacher Ryland Grace wakes up on a spaceship light years from home with no recollection of who he is or how he got there.",
    popularity: 402.3877,
    poster_path: "/yihdXomYb5kTeSivtFndMy5iDmf.jpg",
    release_date: "2026-03-15",
    softcore: false,
    video: false,
    vote_average: 8.612,
    vote_count: 3792,
  },
  {
    adult: false,
    backdrop_path: "/lgotja3xMoJZbynwHfcQcJAEMWH.jpg",
    genre_ids: [12, 16, 35, 10751, 9648],
    id: 1084242,
    title: "Zootopia 2",
    original_language: "en",
    original_title: "Zootopia 2",
    overview:
      "Rookie cops Judy Hopps and Nick Wilde find themselves on the twisting trail of a great mystery when Gary De'Snake arrives.",
    popularity: 79.4852,
    poster_path: "/oJ7g2CifqpStmoYQyaLQgEU32qO.jpg",
    release_date: "2025-11-26",
    softcore: false,
    video: false,
    vote_average: 7.638,
    vote_count: 2785,
  },
];

const PROJECT_HAIL_MARY_DETAIL: MovieDetail = {
  adult: false,
  backdrop_path: "/2I1OFQJ0L9T0dpU6FobKFWV2PxX.jpg",
  belongs_to_collection: null,
  budget: 200000000,
  genres: [
    { id: 878, name: "Science Fiction" },
    { id: 12, name: "Adventure" },
  ],
  homepage: "https://www.amazon.com/salp/projecthailmary?hhf",
  id: 687163,
  imdb_id: "tt12042730",
  origin_country: ["US"],
  original_language: "en",
  original_title: "Project Hail Mary",
  overview:
    "Science teacher Ryland Grace wakes up on a spaceship light years from home with no recollection of who he is or how he got there. As his memory returns, he begins to uncover his mission: solve the riddle of the mysterious substance causing the sun to die out.",
  popularity: 402.3877,
  poster_path: "/yihdXomYb5kTeSivtFndMy5iDmf.jpg",
  production_companies: [
    {
      id: 77973,
      logo_path: "/eUZ0kfE4uyO0JYIrjgUSOqWPqjK.png",
      name: "Lord Miller",
      origin_country: "US",
    },
    {
      id: 210099,
      logo_path: "/g5oRCNCi8kNVb8gEoSoIcqkhjmR.png",
      name: "Amazon MGM Studios",
      origin_country: "US",
    },
    {
      id: 84041,
      logo_path: "/nw4kyc29QRpNtFbdsBHkRSFavvt.png",
      name: "Pascal Pictures",
      origin_country: "US",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
  ],
  release_date: "2026-03-15",
  revenue: 668516856,
  runtime: 157,
  softcore: false,
  spoken_languages: [
    { english_name: "Mandarin", iso_639_1: "zh", name: "普通话" },
    { english_name: "English", iso_639_1: "en", name: "English" },
    { english_name: "Japanese", iso_639_1: "ja", name: "日本語" },
    { english_name: "Russian", iso_639_1: "ru", name: "Pусский" },
  ],
  status: "Released",
  tagline: "Believe in the Hail Mary.",
  title: "Project Hail Mary",
  video: false,
  vote_average: 8.612,
  vote_count: 3792,
};

function createDetailPreview(movie: MovieSummary): MovieDetail {
  return {
    ...movie,
    belongs_to_collection: null,
    budget: 0,
    genres: movie.genre_ids.map((genreId) => ({
      id: genreId,
      name: MOVIE_GENRE_NAME_BY_ID.get(genreId) ?? String(genreId),
    })),
    homepage: null,
    imdb_id: null,
    origin_country: [movie.original_language.toUpperCase()],
    production_companies: [],
    production_countries: [],
    revenue: 0,
    runtime: null,
    spoken_languages: [],
    status: "Preview",
    tagline: null,
  };
}

export function getMovieDetailPreview(movieId: MovieId) {
  const numericMovieId = Number(movieId);

  if (numericMovieId === PROJECT_HAIL_MARY_DETAIL.id) {
    return PROJECT_HAIL_MARY_DETAIL;
  }

  const listMovie = MOVIE_LIST_PREVIEW.find(
    (movie) => movie.id === numericMovieId
  );

  return createDetailPreview(listMovie ?? MOVIE_LIST_PREVIEW[0]);
}
