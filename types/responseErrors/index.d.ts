import { AdjustmentRequestResponseErrors } from './adjustmentRequestResponseErrors'
import { AdminPaymentErrors } from './adminPaymentErrors'
import { CalculatorResponseErrors } from './calculatorResponseErrors'
import { ContractResponseErrors } from './contractResponseErrors'
import { GenericResponseErrors } from './genericResponseTypes'
import { ImportErrors } from './importErrors'
import { InvalidProductTypeErrors } from './invalidProductTypeErrors'
import { PasswordErrors } from './passwordResponseErrors'
import { paymentResponseErrors } from './paymentResponseErrors'
import { RateLimitErrors } from './rateLimitErrors'
import { VatLookupResponseErrors } from './vatLookupResponseErrors'
import { VehcileBlacklistErrors } from './vehcileBlacklistErrors'

export type ResponseErrors =
  | AdminPaymentErrors
  | CalculatorResponseErrors
  | ContractResponseErrors
  | GenericResponseErrors
  | VatLookupResponseErrors
  | ImportErrors
  | PasswordErrors
  | paymentResponseErrors
  | AdjustmentRequestResponseErrors
  | InvalidProductTypeErrors
  | RateLimitErrors
  | VehcileBlacklistErrors
