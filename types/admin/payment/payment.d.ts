export interface ICreditCard {
  cardToken: string
  isDefault: boolean
}

export interface ICreditCardRecord {
  cardId: string
  brand: string
  expireYear: number
  expireMonth: number
  last4: string
  isDefault: boolean
}
