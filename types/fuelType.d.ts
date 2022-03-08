export interface FuelType {
  name: string
  id?: number
}

export interface IFuelTypeRequest {
  mapToFuelType?: boolean
  forProduct?: boolean | undefined
}
