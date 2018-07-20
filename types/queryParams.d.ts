// @NOTE - Deprecate this as search is a optional query param and
// paginated query params has their own extension of query params
export interface ISearchQuery<OrderBy> {
  limit?: number
  offset?: number
  query?: string
  orderBy?: OrderBy
  orderDirection?: OrderDirection
}

// @NOTE - Deprecate this
export type OrderDirection = 'ASC' | 'DESC'

// @NOTE - Use this
export type OrderDirectionType = 'ASC' | 'DESC'

export interface IPaginationParams<OrderBy> {
  limit?: number
  offset?: number
  orderBy?: OrderBy
  orderDirection?: OrderDirectionType
}

export interface IQueryParams<Filtering = undefined> {
  filtering?: Filtering
  search?: string
}

export interface IPaginatedQueryParams<OrderBy, Filtering = undefined> extends IQueryParams<Filtering> {
  pagination?: IPaginationParams<OrderBy>
}

export interface IPaginatedQuery<OrderByType, Filtering = undefined> {
  params?: IPaginatedQueryParams<OrderByType, Filtering>
}

export interface IPagination<OrderByType> {
  totalCount: number
  resultCount: number
  currentPage: number
  pages: number
  offset: number
  limit: number
  orderBy: OrderByType
  orderDirection: OrderDirectionType
}

export interface IPaginatedResponse<Result, OrderByType> {
  pagination: IPagination<OrderByType>
  result: Result
}
