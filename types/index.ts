export enum ContractState {
  Draft = 1,
  Offer = 100,
  OfferExpired = 110,
  OfferRevoked = 120,
  OfferRejected = 130, // not used
  Active = 200,
  Suspended = 400,
  Terminated = 500,
  Completed = 800, // not used
  Settled = 900,
}

export enum ContractActionType {
  create = 100, // Who created the contract? a customer or a seller? if the contract was created as an extentioon information about the parent must be in the details
  sendDraft = 120, // A draft was sent to the customer
  sendOffer = 140, // An offer was sent to the customer
  sendOfferReminderMail = 150, // A reminder about offer was sent to the customer
  sendOfferReminderMail2 = 152, // A reminder about offer was sent to the customer
  sendOfferReminderMail3 = 154, // A reminder about offer was sent to the customer
  rejectOffer = 160, // The customer rejected the offer
  acceptOffer = 180, // The customer accepted the offer
  approveOffer = 200, // Who approved it? that would be the customer
  activate = 300, // The contract was activated by either the customer or the seller
  expire = 400, // The contract expired
  changeVehicleData = 420, // Meta data for the vehicle was changed
  changeCustomerData = 440, // Meta data for the customer was changed
  changePaymentData = 460, // Information about payment was changed
  modify = 500, // (extended) The contract was changed in a way that changes the financial agreement, if a new contract was created as a sideeffect, information about the new contract is in the details
  suspend = 600, // Who suspended the contract, if the system did this automatically that will be described in the details
  reactivate = 700, // Who unsuspended the contract
  terminate = 800, // Who terminated the contract
  settle = 900, // Who Settled the contract, any settlement comments will be in the details
}

export { IAddressRequest, IAddressResponse } from './address'
export { App } from './app'
export { Brand } from './brand'
export { IContactPersonRequest, IContactPersonResponse } from './contactPerson'
export { IContractResponse } from './contract/contract'
export { IContractActivationRequest } from './contract/contractActivation'
export { IContractFilterOptions, IContractFilterOption } from './contract/contractFilter'
export { IContractOfferRequest, IContractOfferResponse } from './contract/contractOffer'
export { IContractDetailsResponse } from './contract/contractDetails'
export { IIncludedContractOption } from './includedContractOption'
export { ContractOrderBy, IContractQuery, IMappedContractQuery, IContractSearchResult } from './contract/contractQuery'
export { IContractOptionRequest, IContractOptionResponse } from './contractOption'
export { IContractProviderRequest, IContractProviderResponse } from './contractProvider'
export { IContractTemplateRequest, IContractTemplateResponse, IContractTemplateCloneRequest } from './contractTemplate'
export { ICountryRequest, ICountryResponse } from './country'
export { IInvoice, InvoiceState, InvoiceOrderBy } from './invoice'
export { Customer } from './customer'
export { DurationOptions } from './durationOptions'
export { ApiError } from './errorResponse'
export { FuelType } from './fuelType'
export { Locale } from './locale'
export { LocalizationData } from './localizationData'
export { Model } from './model'
export { PaymentCard } from './paymentCard'
export { PaymentPlan } from './paymentPlan'
export { ICalculationRequest, ICalculationResponse } from './priceCalculation'
export { PriceSpecification } from './priceSpecification'
export { IBrandingPayloadResponse, IStripeInformationResponse, IProviderInformationResponse, IProviderBrandingResponse, IProviderStylingResponse } from './providerBranding'
export { CalculatorResponseErrors } from './responseErrors/calculatorResponseErrors'
export { ContractResponseErrors } from './responseErrors/contractResponseErrors'
export { GenericResponseErrors } from './responseErrors/genericResponseTypes'
export { ResponseErrors } from './responseErrors/index'
export { ISearchQuery, OrderDirection, IPaginatedResult } from './searchQuery'
export { StripeGenderType, StripeCountryType, StripeCurrencyType, StripeEntityType } from './stripe/stripe'
export { IStripe, IStripeResponse, IStripeRequest } from './stripe/stripe'
export { IStripeAddress } from './stripe/stripeAddress'
export { IStripeVerification, StripeVerificationFieldEnum, StripeVerificationReasonEnum } from './stripe/stripeVerification'
export { IStripeDateOfBirth } from './stripe/stripeDateOfBirth'
export { IStripeDeclineChargeOn } from './stripe/stripeDeclineChargeOn'
export { IStripeExternalAccount, IStripeExternalAccountResponse } from './stripe/stripeExternalAccount'
export { IStripeLegalEntity } from './stripe/stripeLegalEntity'
export { IStripeOwner } from './stripe/stripeOwner'
export { ITermsOfServiceRequest, ITermsOfServiceResponse } from './termsOfService'
export { Translation } from './translation'
export { ITableUserConfiguration, IColumnConfiguration, UserConfigurationType } from './userConfiguration/tableUserConfiguration'
export { Vehicle } from './vehicle'
export { VehicleContracts } from './vehicleContracts'
export { ILoginRequest, ILoginResponse } from './login'
export { IResetPasswordRequest } from './resetPassword'
export { IUserResponse } from './user'
export { IVatLookupRequest, IVatLookupResponse } from './vatLookup'
export { IContractActionResponse, ActionOrderBy } from './contractAction'
export { IWorkshopOperation, WorkshopOrderBy } from './workshopOperation'
