import { GenericResponseErrors } from './genericResponseTypes'
import { CalculatorResponseErrors } from './calculatorResponseErrors'
import { ContractResponseErrors } from './contractResponseErrors'
import { VatLookupResponseErrors } from './vatLookupResponseErrors'
import { WorkshopImportErrors } from './workshopResponseErrors'
import { AdminPaymentErrors } from './adminPaymentErrors'

export type ResponseErrors =
  | AdminPaymentErrors
  | CalculatorResponseErrors
  | ContractResponseErrors
  | GenericResponseErrors
  | VatLookupResponseErrors
  | WorkshopImportErrors
