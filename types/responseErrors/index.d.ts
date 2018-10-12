import { AdminPaymentErrors } from './adminPaymentErrors'
import { CalculatorResponseErrors } from './calculatorResponseErrors'
import { ContractResponseErrors } from './contractResponseErrors'
import { GenericResponseErrors } from './genericResponseTypes'
import { PasswordErrors } from './passwordResponseErrors'
import { VatLookupResponseErrors } from './vatLookupResponseErrors'
import { WorkshopImportErrors } from './workshopResponseErrors'

export type ResponseErrors =
  | AdminPaymentErrors
  | CalculatorResponseErrors
  | ContractResponseErrors
  | GenericResponseErrors
  | VatLookupResponseErrors
  | WorkshopImportErrors
  | PasswordErrors
