import { PriceSpecification } from './index'

export type WorkshopOrderBy = 'id' | 'date'
export interface IWorkshopOperationCollection {
  date: string
  price: PriceSpecification
  operations: IWorkshopOperation[]
}

export interface IWorkshopOperation {
  id?: number
  price: PriceSpecification | number
  mileage: number
  date: Date | string
  description: string
}
