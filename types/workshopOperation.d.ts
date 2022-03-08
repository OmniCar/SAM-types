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
  value: number
  mileage?: number
  date: Date | string
  description: string
  contractPrettyIdentifier?: string
}