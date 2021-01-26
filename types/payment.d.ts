import { PriceSpecification } from './priceSpecification'
import { SettlementPaymentType } from './index'

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

/**
 * Payload to Initialize a Stripe Checkout Session
 */
export interface IPreparePaymentRequest {
  contractId?: number
  prettyIdentifier?: string
  cancel_url: string
  success_url: string
}

/**
 * Response payload from from a Stripe Checkout Session initialization request
 */
export interface IPreparePaymentResponse {
  contractId: number
  prettyIdentifier: string
  paymentGateway: PaymentGateway
  checkoutSessionId?: string
  stripePublicKey?: string
  stripeAccount?: string
}

/**
 * Payload to create settlement payments
 */
export interface ISettlementPaymentRequest {
  paymentAmount: number
  withVat: boolean
  type: SettlementPaymentType
  comment?: string
  shareWithCustomer?: boolean
}
