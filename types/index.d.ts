export declare enum ContractState {
  Draft = 1,
  Offer = 100,
  OfferExpired = 110,
  OfferRevoked = 120,
  OfferRejected = 130,
  Active = 200,
  ActivePrePaid = 210,
  ActivePendingTermination = 250,
  Suspended = 400,
  Terminated = 500,
  Extended = 510,
  Expired = 600,
  Completed = 800,
  Settled = 900,
  SettledPrePaid = 950,
}
export declare enum WarrantyState {
  Active = 200,
  Rejected = 300,
  Terminated = 500,
}
export declare enum DbType {
  int = 1,
  text = 2,
  date = 3,
  monetary = 4,
  mileage = 5,
}
export declare enum AggregateType {
  sum = 1,
  concat = 2,
  count = 3,
}
export declare enum FormattingLocale {
  'sv-SE' = 0,
  'uk-UA' = 1,
  'da-DK' = 2,
  'en-GB' = 3,
  'fi-FI' = 4,
  'en-US' = 5,
}
export declare enum ContractActionType {
  createAndActivateInV4 = 90,
  create = 100,
  sendDraft = 120,
  buyNow = 130,
  createOffer = 140,
  sendOfferReminderMail = 150,
  softBounce = 1510,
  hardBounce = 1512,
  dnsError = 1513,
  sendContractTerminationMail = 151,
  sendOfferReminderMail2 = 152,
  sendContractActivationMail = 153,
  sendOfferReminderMail3 = 154,
  sendContractSuspendedMail = 155,
  sendContractOfferCreatedMail = 156,
  resendContractOfferMail = 1565,
  sendOfferToOneselfMail = 1566,
  sendContractReactivationMail = 157,
  sendContractAdjustmentMail = 158,
  sendContractSettlementMail = 159,
  rejectOffer = 160,
  acceptOffer = 180,
  approveOffer = 200,
  activate = 300,
  sendAndActivateInV4 = 1300,
  expire = 400,
  expireContract = 410,
  sendContractExpiredMail = 411,
  changeVehicleData = 420,
  changeCustomerData = 440,
  changePaymentData = 460,
  modify = 500,
  createPendingTermination = 550,
  cancelPendingTermination = 560,
  suspend = 600,
  successfulInvoicePayment = 690,
  reactivate = 700,
  sendAndReactivateInV4 = 1700,
  extending = 710,
  pauseSubscription = 720,
  terminate = 800,
  sendAndInactivateInV4 = 1800,
  registerCashPayment = 810,
  registerCashPayout = 820,
  registerProviderPayment = 830,
  createStripeRefund = 840,
  registerRefundedCharge = 850,
  createStripeInvoice = 860,
  registerPaidInvoice = 870,
  registerCredit = 880,
  settle = 900,
  archive = 1000,
}
export declare enum PaymentFailureReason {
  expiredCard = 10,
  authenticationRequired = 20,
  insufficientFunds = 30,
  withdrawalCountLimitExceeded = 40,
  invalidAmount = 50,
  fraudLostStolen = 60,
  attemptPaymentAgain = 70,
  incorrectData = 80,
  contactCardIssuer = 90,
  unknownReason = 100,
}
export declare enum OfferRequestState {
  Pending = 100,
  Approved = 200,
  Rejected = 300,
  Expired = 400,
}
export declare enum ResponseWarnings {
  GenericWarning = 499,
}
export declare type FileUploadToStorageType = 'General-Storage' | 'Logo-Banner-Storage' | 'Logo-Square-Storage'
export declare enum WarrantyOnboardingConfig {
  interdan = 'Interdan',
}
export declare enum OutageSeverityLevel {
  Low = 1,
  Medium = 2,
  High = 3,
}
export declare enum SettlementPaymentType {
  cashPayout = 1,
  cashPayment = 2,
  stripeRefund = 3,
  stripePayment = 4,
  providerPayment = 5,
  customerCredit = 6,
}
export declare enum ReleaseSystem {
  Admin = 1,
  Superadmin = 2,
  Api = 3,
  WebShop = 4,
}
export declare enum ReleaseTag {
  ADDED = 1,
  FIXED = 2,
  NEW = 3,
  REMOVED = 4,
  UPDATED = 5,
  IMPROVED = 6,
}
export * from './address'
export * from './admin'
export * from './app'
export * from './autoDAP'
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
export * from './currency'
export * from './customer'
export * from './durationOptions'
export * from './errorResponse'
export * from './fuelType'
export * from './includedContractOption'
export * from './invoice'
export * from './locale'
export * from './localizationData'
export * from './model'
export * from './outage'
export * from './payment'
export * from './priceCalculation'
export * from './priceSpecification'
export * from './product'
export * from './providerBranding'
export * from './queryParams'
export * from './reports/reports'
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
export * from './releaseNotes'
export * from './paymentFailureReason'
export * from './translations'
