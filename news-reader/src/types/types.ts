export interface Article {
  source: { id: string; name: string }
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

export interface ListResponse<T> {
  status: string
  totalResults: number
  articles: T[]
}

export interface LayoutState {
  listView: boolean
}
