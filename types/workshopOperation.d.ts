import { PriceSpecification } from './index'

export type WorkshopOrderBy = 'id' | 'date'

export interface IWorkshopOperationRecord {
  id?: number
  price: PriceSpecification
  mileage: number
  date: Date | string
  description: string
}