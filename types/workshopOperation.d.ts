import { PriceSpecification } from './index'

export type WorkshopOrderBy = 'id' | 'date'

export interface IWorkshopOperation {
  id?: number
  price: PriceSpecification
  mileage: number
  date: Date | string
  description: string
}