import { PriceSpecification } from './priceSpecification'

/** supported payment gateways */
export type PaymentGateway = 'Stripe' | 'B2B' | 'NONE' | 'Mock'

/** supported payment types */
export type PaymentType = 'automatic' | 'manual'

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

export interface IPreparePaymentResponse {
  contractId: number
  paymentGateway: PaymentGateway
  checkoutSessionId?: string
  stripePublicKey?: string
}
