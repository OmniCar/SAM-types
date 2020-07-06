export enum ContractState {
  Draft = 1,
  Offer = 100,
  OfferExpired = 110,
  OfferRevoked = 120,
  OfferRejected = 130, // not used
  Active = 200,
  ExternalWarranty = 210,
  Suspended = 400,
  Terminated = 500,
  Completed = 800, // not used
  Settled = 900,
}

export enum WarrantyState {
  Active = 200,
  Rejected = 300,
  Terminated = 500,
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

export enum OfferRequestState {
  Pending = 100,
  Approved = 200,
  Rejected = 300,
  Expired = 400,
}

export enum ResponseWarnings {
  GenericWarning = 499,
}

export type FileUploadToStorageType = 'General-Storage' | 'Logo-Banner-Storage' | 'Logo-Square-Storage'

export * from './address'
export * from './admin'
export * from './app'
export * from './brand'
export * from './chart'
export * from './contactPerson'
export * from './contract/contract'
export * from './contract/contractActivation'
export * from './contract/contractFilter'
export * from './contract/contractList'
export * from './contract/contractOffer'
export * from './contract/contractQuery'
export * from './contractAction'
export * from './contractOption'
export * from './contractProvider'
export * from './contractTemplate'
export * from './country'
export * from './customer'
export * from './durationOptions'
export * from './errorResponse'
export * from './fuelType'
export * from './includedContractOption'
export * from './invoice'
export * from './locale'
export * from './localizationData'
export * from './model'
export * from './payment'
export * from './priceCalculation'
export * from './priceSpecification'
export * from './providerBranding'
export * from './queryParams'
export * from './resetPassword'
export * from './responseErrors/calculatorResponseErrors'
export * from './responseErrors/contractResponseErrors'
export * from './responseErrors/genericResponseTypes'
export * from './responseErrors/index'
export * from './stripe/stripe'
export * from './stripe/stripeAddress'
export * from './stripe/stripeDateOfBirth'
export * from './stripe/stripeDeclineChargeOn'
export * from './stripe/stripeExternalAccount'
export * from './stripe/stripeLegalEntity'
export * from './stripe/stripeOwner'
export * from './stripe/stripeVerification'
export * from './termsOfService'
export * from './translation'
export * from './user'
export * from './userConfiguration/tableUserConfiguration'
export * from './userConfiguration/userConfiguration'
export * from './vatLookup'
export * from './vehicle'
export * from './vehiclePartial'
export * from './vehicleContracts'
export * from './webcalc'
export * from './workshopOperation'
export * from './segments'
