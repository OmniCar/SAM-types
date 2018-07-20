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
  id: number
  date: Date | string
  price: PriceSpecification
  mileage: string
  description: string
  userId: string
  userName: string
  vehicleId: string
  contractId: string
}