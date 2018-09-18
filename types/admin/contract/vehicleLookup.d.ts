export interface IVehiclePartial {
  brand: string // brand: 'Peugeot',
  model: string // model: '208',
  fuelType: string // fuel_type: 'Benzin',
  firstRegistrationDate: string | Date // first_registration_date: '2016-10-31',
}

export interface IVehicleInfo {
  // here we implement based on a lookup on BG64770
  registration: string // registration: 'BG64770',
  vin: string // vin: 'VF3CCHMZ6GT105374',
  type: string // not complete enum...
  brand: string // brand: 'Peugeot',
  model: string // model: '208',
  fuelType: string // fuel_type: 'Benzin',
  firstRegistrationDate: string | Date // first_registration_date: '2016-10-31',
  expireDate: string | null // null
}
