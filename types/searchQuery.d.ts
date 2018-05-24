export interface ISearchQuery {
  limit?: number
  offset?: number
  query?: string
  orderBy?: string
  orderDirection?: OrderDirection
}

export type OrderDirection = 'ASC' | 'DESC'

export interface IPaginatedResult<T> {
  totalCount: number
  resultCount: number
  currentPage: number
  pageCount: number
  results: T
}
