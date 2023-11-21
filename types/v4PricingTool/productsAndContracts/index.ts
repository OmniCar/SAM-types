export type TV4PTProductType = 'ServiceAgreement' | 'Warranty' | 'WarrantyAndServiceAgreement'

// V4PricingTool Payment Type.
export type TV4PTPaymentType =
  | 'DealerPaid' // One-time dealer payment.
  | 'CustomerSubscription' // Customer monthly subscription.
  | 'CustomerPaymentCard' // Deprecated, use 'CustomerSubscription' instead. /2023-01-01
  | 'Subscription' // Deprecated, use 'CustomerSubscription' instead. /2023-01-01
  | 'DealerPaidMonthly' // Deprecated, use 'DealerPaid' instead. /2023-01-01
  | 'OneTimeDealerPayment' // Deprecated, use 'DealerPaid' instead. /2023-01-01
