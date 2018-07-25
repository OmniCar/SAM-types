export interface IFueltypeCollection {
  name: string
  id: number
}

export interface IModelCollection {
  name: string
  id: number
  fuelTypes: IFueltypeCollection[]
}

export interface IBrandCollection {
  name: string
  id: number
  models: IModelCollection[]
}

export interface ICarCollection {
  brands: IBrandCollection[]
}
