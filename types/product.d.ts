import { Brand } from "./brand";
import { Model } from "./model";
import { FuelType } from "./fuelType";
import { VehicleContracts as ProductContracts } from "./vehicleContracts";

export interface Other {
    id?: number
    serialNumber?: string
    serialNumber2?: string
    itemNumber?: string
    itemNumber2?: string
    regDate?: string
    brand: Brand
    model: Model
    fuelType: FuelType | undefined
    modelYear: number
    typeName: string
}

export interface ProductAlongItsContracts extends Other {
    contracts: ProductContracts | undefined
    hasActiveWarranty: boolean | undefined
}