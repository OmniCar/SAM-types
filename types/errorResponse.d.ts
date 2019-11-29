import { ResponseErrors, ResponseWarnings } from './responseErrors'

export interface ApiError {
  message: ResponseErrors
  errorCode?: number
  debug?: object
}
