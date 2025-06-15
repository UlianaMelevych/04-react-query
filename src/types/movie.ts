// export interface Movie {
//   id: number;
//   title: string;
//   poster_path: string;
//   overview: string;
// }

// export interface MovieApiResponse {
//   page: number;
//   results: Movie[];
//   total_pages: number;
//   total_results: number;
// }

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

export interface MovieApiResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
