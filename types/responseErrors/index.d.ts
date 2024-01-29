import { AdjustmentRequestResponseErrors } from './adjustmentRequestResponseErrors'
import { AdminPaymentErrors } from './adminPaymentErrors'
import { CalculatorResponseErrors } from './calculatorResponseErrors'
import { ContractResponseErrors } from './contractResponseErrors'
import { GenericResponseErrors } from './genericResponseTypes'
import { ImportErrors } from './importErrors'
import { InvalidProductTypeErrors } from './invalidProductTypeErrors'
import { OfferRequestResponseErrors } from './offerRequestResponseErrors'
import { PasswordErrors } from './passwordResponseErrors'
import { paymentResponseErrors } from './paymentResponseErrors'
import { RateLimitErrors } from './rateLimitErrors'
import { UserAndCustomerErrors } from './userAndCustomerErrors'
import { VatLookupResponseErrors } from './vatLookupResponseErrors'
import { VehcileBlacklistErrors } from './vehcileBlacklistErrors'

export type ResponseErrors =
  | AdjustmentRequestResponseErrors
  | AdminPaymentErrors
  | CalculatorResponseErrors
  | ContractResponseErrors
  | GenericResponseErrors
  | ImportErrors
  | InvalidProductTypeErrors
  | OfferRequestResponseErrors
  | PasswordErrors
  | paymentResponseErrors
  | RateLimitErrors
  | UserAndCustomerErrors
  | VatLookupResponseErrors
  | VehcileBlacklistErrors
