// Normalized fuel type names.
export enum FuelTypes {
  PETROL = 'Petrol',
  DIESEL = 'Diesel',
  ELECTRIC = 'Electric',
  HYBRID = 'Hybrid' // Note: Not a fuel type per se, but more of a clarification for customer. Requested by stakeholder.
}

export interface FuelType {
  name: string
  id?: number
}
