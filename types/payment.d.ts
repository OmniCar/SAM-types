import { PriceSpecification } from './priceSpecification'

/** supported payment gateways */
export type PaymentGateway = 'Stripe' | 'B2B'

/** credit card */
export interface PaymentCard {
  cardType: string
  last4: string
  expMonth: number
  expYear: number
}

/** payment plan */
export interface PaymentPlan {
  amountPrPayment: PriceSpecification
  downpayment: PriceSpecification
  totalCost: PriceSpecification
}
