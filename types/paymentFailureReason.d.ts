import { PaymentFailureReason } from './index'

export interface IPaymentFailureReason {
  paymentFailureReason: PaymentFailureReason
  stripeDeclineReason: string
}
