import { GenericResponseErrors } from './genericResponseTypes'
import { CalculatorResponseErrors } from './calculatorResponseErrors'
import { ContractResponseErrors } from './contractResponseErrors'
import { VatLookupResponseErrors } from './vatLookupResponseErrors';

export type ResponseErrors = GenericResponseErrors | CalculatorResponseErrors | ContractResponseErrors | VatLookupResponseErrors
