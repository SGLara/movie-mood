export interface MovieDetails {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: BelongsToCollection
  budget: number
  genres: Genre[]
  homepage: string
  id: number
  imdb_id: string
  origin_country: string[]
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  release_date: Date
  revenue: number
  runtime: number
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface BelongsToCollection {
  backdrop_path: string
  id: number
  name: string
  poster_path: string
}

export interface Genre {
  id: number
  name: string
}

export interface ProductionCompany {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

export interface ProductionCountry {
  iso_3166_1: string
  name: string
}

export interface SpokenLanguage {
  english_name: string
  iso_639_1: string
  name: string
}

export interface TvSerieDetails {
  adult: boolean
  backdrop_path: string
  created_by: CreatedBy[]
  episode_run_time: any[]
  first_air_date: Date
  genres: Genre[]
  homepage: string
  id: number
  in_production: boolean
  languages: string[]
  last_air_date: Date
  last_episode_to_air: TEpisodeToAir
  name: string
  networks: Network[]
  next_episode_to_air: TEpisodeToAir
  number_of_episodes: number
  number_of_seasons: number
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: Network[]
  production_countries: ProductionCountry[]
  seasons: Season[]
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string
  type: string
  vote_average: number
  vote_count: number
}

export interface CreatedBy {
  credit_id: string
  gender: number
  id: number
  name: string
  original_name: string
  profile_path: string
}

export interface TEpisodeToAir {
  air_date: Date
  episode_number: number
  episode_type: string
  id: number
  name: string
  overview: string
  production_code: string
  runtime: number
  season_number: number
  show_id: number
  still_path: string
  vote_average: number
  vote_count: number
}

export interface Network {
  id: number
  logo_path: null | string
  name: string
  origin_country: string
}

export interface Season {
  air_date: Date
  episode_count: number
  id: number
  name: string
  overview: string
  poster_path: string
  season_number: number
  vote_average: number
}
