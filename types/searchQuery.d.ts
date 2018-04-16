export interface ISearchQuery {
  limit?: number
  offset?: number
  query?: string
  orderBy?: string
  orderDirection?: OrderDirection
}

export type OrderDirection = 'ASC' | 'DESC'
