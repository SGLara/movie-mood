declare module '*.png'

interface ImportMetaEnv {
  readonly TMDB_API_URL: string
  readonly TMDB_API_KEY: string
  readonly PUBLIC_PERPLEXITY_API_KEY: string
  readonly AI_MODEL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
