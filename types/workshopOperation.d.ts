import { PriceSpecification } from './index'

export type WorkshopOrderBy = 'id' | 'date'

export interface IWorkshopOperationListRecord {
  id?: number
  price: PriceSpecification
  mileage: number
  date: Date | string
  description: string
}

export interface IWorkshopOperationDetailsRecord {
  id?: number
  price: PriceSpecification
  date: Date | string
  mileage: number
  description: string
}