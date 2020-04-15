// Normalized fuel type names.
export const FT_PETROL = 'Petrol'
export const FT_DIESEL = 'Diesel'
export const FT_ELECTRIC = 'Electric'
export const FT_HYBRID = 'Hybrid' // Note: Not a fuel type per se, but more of a clarification for customer. Requested by stakeholder.

export interface FuelType {
  name: string
  id?: number
}
