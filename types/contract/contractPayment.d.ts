import { PaymentGateway } from 'payment'

export interface IPreparePaymentResponse {
  contractId: number
  checkoutSessionId?: string
  paymentGateway: PaymentGateway
}
