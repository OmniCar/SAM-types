import { AdminPaymentErrors } from './adminPaymentErrors'
import { CalculatorResponseErrors } from './calculatorResponseErrors'
import { ContractResponseErrors } from './contractResponseErrors'
import { GenericResponseErrors } from './genericResponseTypes'
import { OfferRequestResponseErrors } from './offerRequestResponseErrors'
import { PasswordErrors } from './passwordResponseErrors'
import { VatLookupResponseErrors } from './vatLookupResponseErrors'
import { WorkshopImportErrors } from './workshopResponseErrors'
import { paymentResponseErrors } from './paymentResponseErrors'

export type ResponseErrors =
  | AdminPaymentErrors
  | CalculatorResponseErrors
  | ContractResponseErrors
  | GenericResponseErrors
  | VatLookupResponseErrors
  | WorkshopImportErrors
  | PasswordErrors
  | OfferRequestResponseErrors
  | paymentResponseErrors
