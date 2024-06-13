export enum ContractState {
  Draft = 1,
  Offer = 100,
  OfferExpired = 110,
  OfferRevoked = 120,
  OfferRejected = 130, // not used
  Active = 200,
  ActivePrePaid = 210,
  ActivePendingTermination = 250,
  Suspended = 400,
  CancelledSubscription = 450,
  Terminated = 500,
  Extended = 510,
  Expired = 600,
  Completed = 800, // not used
  Settled = 900,
  SettledPrePaid = 950,
}

export enum WarrantyState {
  Active = 200,
  Rejected = 300,
  Terminated = 500,
}

export enum DbType {
  int = 1,
  text,
  date,
  monetary,
  mileage,
}

export enum AggregateType {
  sum = 1,
  concat,
  count,
}

export enum FormattingLocale {
  'sv-SE',
  'uk-UA',
  'da-DK',
  'en-GB',
  'fi-FI',
  'en-US',
}

export enum ContractActionType {
  createInV4AndActivate = 90, // Contract was created in V4 (and activated there), this (mirror) contract in JustGO is based on that contract in V4. See also sendMirrorAndActivateInV4.
  create = 100, // Who created the contract? a customer or a seller? if the contract was created as an extentioon information about the parent must be in the details.
  sendDraft = 120, // A draft was sent to the customer.
  buyNow = 130, // Customer visited payment page.
  createOffer = 140, // An offer was created.
  sendOfferReminderMail = 150, // A reminder about offer was sent to the customer.
  softBounce = 1510, // Email soft bounced, temporary issues preventing email delivery (mailbox is full, delays on client side, spam/reputation related exc).
  hardBounce = 1512, // Email hard bounced, permanent issues preventing email delivery (address doesn't exist, email not complying with sending domain auth policy, spam/reputation related exc).
  dnsError = 1513, // A type of soft bounce, can occur during domain migration and change of email provider.
  sendContractTerminationMail = 151, // A termination mail was sent to the customer.
  sendOfferReminderMail2 = 152, // A reminder about offer was sent to the customer.
  sendContractActivationMail = 153, // A contract activation mail was sent to the customer.
  sendOfferReminderMail3 = 154, // A reminder about offer was sent to the customer.
  sendContractSuspendedMail = 155, // A suspended mail was sent to the customer.
  sendContractOfferCreatedMail = 156, // Email sent to the customer informing offer has been created.
  resendContractOfferMail = 1565, // Resent offer to the customer via "Resend Offer" action.
  sendOfferToOneselfMail = 1566, // End-user sent the offer to oneself (via Webcalc).
  sendContractReactivationMail = 157, // A contract reactivation mail was sent to the customer.
  sendContractAdjustmentMail = 158, // A contract adjustment mail was sent to the customer.
  sendContractSettlementMail = 159, // A contract settlement mail was sent to the customer.
  rejectOffer = 160, // The customer rejected the offer.
  acceptOffer = 180, // The customer accepted the offer.
  approveOffer = 200, // Who approved it? that would be the customer.
  activate = 300, // The contract was activated by either the customer or the seller.
  sendMirrorAndActivateInV4 = 1300, // A (copy/mirror) of this (already created in JustGO) contract was sent to V4 (and activated there in V4). See also createInV4AndActivate.
  expire = 400, // The contract offer expired and archived.
  expireContract = 410, // The contract expired.
  sendContractExpiredMail = 411, // A expired mail was sent to the customer.
  changeVehicleData = 420, // Meta data for the vehicle was changed.
  changeCustomerData = 440, // Meta data for the customer was changed.
  changePaymentData = 460, // Information about payment was changed.
  modify = 500, // (extended) The contract was changed in a way that changes the financial agreement, if a new contract was created as a sideeffect, information about the new contract is in the details.
  createPendingTermination = 550, // Registers the creation of a pending termination and indicates that the contract's status has changed from Active to ActivePendingTermination.
  cancelPendingTermination = 560, // Registers the cancellation of a pending termination and indicates that the contract's status has changed from ActivePendingTermination to Active.
  suspend = 600, // Who suspended the contract, if the system did this automatically that will be described in the details.
  cancelSubscription = 650, // When Stripe subscription is cancelled without the request (automatically because of failed payments).
  successfulInvoicePayment = 690, // Successful invoice payment. Contract soon to be re-activated.
  reactivate = 700, // Who unsuspended the contract.
  sendAndReactivateInV4 = 1700, // Sent reactivate request to V4.
  extending = 710, // Who extended the contract (the contract which extended).
  pauseSubscription = 720, // The subscription is paused because of contract paid off.
  terminate = 800, // Who terminated the contract.
  sendAndInactivateInV4 = 1800, // Sent inactivate request to V4.
  registerCashPayment = 810, // Registered cash payment. Helps to solve balance issues on a contract.
  registerCashPayout = 820, // Registered cash payout. Helps to solve balance issues on a contract.
  registerProviderPayment = 830, // Registered provider payment. It means that provider forgive some amount. Helps to solve balance issues on a contract.
  createStripeRefund = 840, // Created stripe refund.
  registerRefundedCharge = 850, // Registered refunded charge. Create new 'refund' invoice (charge.refunded webhook).
  createStripeInvoice = 860, // Created stripe invoice for settlement.
  registerPaidInvoice = 870, // Registered paid invoice. Create new 'settle charge' invoice (invoice.payment_succeeded webhook).
  registerCredit = 880, // // Registered stripe credit for the customer (type of refund). Helps to solve balance issues on a contract.
  settle = 900, // Who Settled the contract, any settlement comments will be in the details.
  archive = 1000, // Archive contract.
  other = 9999, // Other action not applicable (yet) by any other action, information about the new and old contract is in the details.
}

export enum PaymentFailureReason {
  expiredCard = 10, // The card has expired.
  authenticationRequired = 20, // The card was declined as the transaction requires authentication.
  insufficientFunds = 30, // The card has insufficient funds to complete the purchase.
  withdrawalCountLimitExceeded = 40, // The customer has exceeded the balance or credit limit available on their card.
  invalidAmount = 50, // The payment amount is invalid, or exceeds the amount that's allowed.
  // If the amount appears to be correct, the customer needs to check with their card issuer.
  fraudLostStolen = 60, // Payment matches a value on the Stripe user's block list. Stripe suspects that it's fraudulent.
  // The card is reported lost or stolen. The specific reason for the decline shouldn't be reported to the customer.
  // Instead, it needs to be presented as a generic_decline.
  attemptPaymentAgain = 70, // Attempt the payment again. If you still can't process it, the customer needs to contact their card issuer.
  // Recommended you not retry charges more than four times.
  incorrectData = 80, // The customer needs try again using the correct card/payment data.
  contactCardIssuer = 90, // The customer needs to contact their card issuer for more information.
  unknownReason = 100, // Unknown Stripe reasons or reasons which shouldn't happen.
}

export enum ResponseWarnings {
  GenericWarning = 499,
}

export type FileUploadToStorageType = 'General-Storage' | 'Logo-Banner-Storage' | 'Logo-Square-Storage'

export enum OutageSeverityLevel {
  Low = 1,
  Medium = 2,
  High = 3,
}

export enum SettlementPaymentType {
  cashPayout = 1,
  cashPayment,
  stripeRefund,
  stripePayment,
  providerPayment,
  customerCredit,
}

export enum ReleaseSystem {
  Admin = 1,
  Superadmin,
  Api,
  WebShop,
}

export enum ReleaseTag {
  ADDED = 1,
  FIXED,
  NEW,
  REMOVED,
  UPDATED,
  IMPROVED,
}

export enum AccessKeyPermission {
  Read = 1,
  Write,
  ReadWrite,
}

export enum AccessKeyService {
  WorkshopOperation = 1,
  Report,
}

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
export * from './v4PricingTool'
export * from './accessKey'
