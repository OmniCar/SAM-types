export interface IBlacklistedVehicleRequest {
    id?: number
    brand: string
    model: string
    fuelType: string
}

export interface IBlacklistedVehicleResponse {
    id: number
    brand: string
    model: string
    fuelType: string
}

export type BlacklistedVehicleOrderByType = keyof IBlacklistedVehicleRequest
