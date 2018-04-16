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
