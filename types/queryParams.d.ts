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

export interface IQueryParams<Filtering = undefined, Fields = string[]> {
  filtering?: Filtering
  search?: string
  fields?: Fields
}

export interface IPaginatedQueryParams<OrderBy, Filtering = undefined, Fields = string[]> extends IQueryParams<Filtering>{
  limit?: number
  offset?: number
  orderBy?: OrderBy
  orderDirection?: OrderDirectionType
}

export interface IPagination<PaginationOrderBy> {
  totalCount: number
  resultCount: number
  currentPage: number
  pages: number
  offset: number
  limit: number
  orderBy: PaginationOrderBy
  orderDirection: OrderDirectionType
}

export interface IPaginatedResult<ResultType, PaginationOrderBy> {
  pagination: IPagination<PaginationOrderBy>
  result: ResultType
}