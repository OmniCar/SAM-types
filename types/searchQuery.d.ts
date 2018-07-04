export interface ISearchQuery<O> {
  limit?: number
  offset?: number
  query?: string
  orderBy?: O
  orderDirection?: OrderDirection
}

export type OrderDirection = 'ASC' | 'DESC'

export interface IPaginatedResult<T, O> {
  totalCount: number
  resultCount: number
  currentPage: number
  pages: number
  offset: number
  limit: number
  orderBy: O
  orderDirection: OrderDirection
  results: T
}
