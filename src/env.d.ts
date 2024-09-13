declare module '*.png'

interface ImportMetaEnv {
  readonly PUBLIC_TMDB_API_URL: string
  readonly PUBLIC_TMDB_API_KEY: string
  readonly PUBLIC_PERPLEXITY_API_KEY: string
  readonly AI_MODEL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
