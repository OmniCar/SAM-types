import { GenericResponseErrors } from './genericResponseTypes'
import { CalculatorResponseErrors } from './calculatorResponseErrors'
import { ContractResponseErrors } from './contractResponseErrors'

export type ResponseErrors = GenericResponseErrors | CalculatorResponseErrors | ContractResponseErrors
