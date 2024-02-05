import { Brand } from './brand'
import { FuelType } from './fuelType'
import { Model } from './model'

// Note: Only serial and item numbers is required, rest are optional.
export interface ProductPartial {
  id?: number
  serialNumber: string
  serialNumber2?: string
  itemNumber: string
  itemNumber2?: string
  regDate?: string
  brand?: Brand
  model?: Model
  fuelType?: FuelType
  modelYear?: number
  typeName?: string
}
