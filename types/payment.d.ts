import { SettlementPaymentType } from './index'
import { PriceSpecification } from './priceSpecification'
import { SettlementPaymentType } from './index'

/** Supported payment gateways. */
export type PaymentGateway = 'Stripe' | 'B2B' | 'V4' | 'NONE' | 'Mock'

/** Supported payment types. */
export type PaymentType = 'automatic' | 'manual'

/** Credit card. */
export interface PaymentCard {
  cardType: string
  last4: string
  expMonth: number
  expYear: number
}

/** Payment plan. */
export interface PaymentPlan {
  amountPrPayment: PriceSpecification
  downpayment: PriceSpecification
  totalCost: PriceSpecification
}

/**
 * Payload to Initialize a Stripe Checkout Session.
 */
export interface IPreparePaymentRequest {
  contractId?: number
  prettyIdentifier?: string
  cancel_url: string
  success_url: string
}

/**
 * Response payload from from a Stripe Checkout Session initialization request.
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
 * Payload to create settlement payments.
 */
export interface ISettlementPaymentRequest {
  paymentAmount: number
  type: SettlementPaymentType
  comment?: string
  shareComment?: boolean
}
