export type TV4PTProductType = 'ServiceAgreement' | 'Warranty' | 'WarrantyAndServiceAgreement' | 'Vary' // Some other product type in V4.

// V4PricingTool Payment Type.
export type TV4PTPaymentType =
  | 'DealerPaid' // One-time dealer payment via V4.
  | 'CustomerSubscription' // Customer monthly subscription.
  | 'DealerPaid/CustomerSubcription' // Request by Johan W
// | 'CustomerPaymentCard' // Deprecated, use 'CustomerSubscription' instead. /2023-01-01
// | 'Subscription' // Deprecated, use 'CustomerSubscription' instead. /2023-01-01
// | 'DealerPaidMonthly' // Deprecated, use 'DealerPaid' instead. /2023-01-01
// | 'OneTimeDealerPayment' // Deprecated, use 'DealerPaid' instead. /2023-01-01
