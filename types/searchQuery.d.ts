export interface ISearchQuery<OrderBy> {
  limit?: number
  offset?: number
  query?: string
  orderBy?: OrderBy
  orderDirection?: OrderDirection
}

export type OrderDirection = 'ASC' | 'DESC'

export interface IPagination<PaginationOrderBy> {
  totalCount: number
  resultCount: number
  currentPage: number
  pages: number
  offset: number
  limit: number
  orderBy: PaginationOrderBy
  orderDirection: OrderDirection
}

export interface IPaginatedResult<ResultType, PaginationOrderBy> {
  pagination: IPagination<PaginationOrderBy>
  result: ResultType
}
