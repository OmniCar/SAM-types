import { PaymentGateway } from './../payment'

export interface IPreparePaymentResponse {
  contractId: number
  paymentGateway: PaymentGateway
  checkoutSessionId?: string
  stripePublicKey?: string
}
