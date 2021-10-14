import { Brand } from "./brand";
import { Model } from "./model";
import { FuelType } from "./fuelType";

export interface Product {
    id?: number
    serialNumber?: string
    serialNumber2?: string
    itemNumber?: string
    itemNumber2?: string
    regDate?: string
    brand: Brand
    model: Model
    fuelType: FuelType
    modelYear: number
    typeName: string
}