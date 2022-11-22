export interface IBlacklistedVehicle {
    id?: number
    brand: string
    model: string
    fuelType: string
}

export type BlacklistedVehicleOrderByType = keyof IBlacklistedVehicle
