export declare enum ContractState {
    Draft = 1,
    Offer = 100,
    OfferExpired = 110,
    OfferRevoked = 120,
    OfferRejected = 130,
    Active = 200,
    Suspended = 400,
    Terminated = 500,
    Completed = 800,
    Settled = 900,
}
export declare enum ContractActionType {
    create = 100,
    sendDraft = 120,
    sendOffer = 140,
    sendOfferReminderMail = 150,
    sendOfferReminderMail2 = 152,
    sendOfferReminderMail3 = 154,
    rejectOffer = 160,
    acceptOffer = 180,
    approveOffer = 200,
    activate = 300,
    expire = 400,
    changeVehicleData = 420,
    changeCustomerData = 440,
    changePaymentData = 460,
    modify = 500,
    suspend = 600,
    reactivate = 700,
    terminate = 800,
    settle = 900,
}
export * from './address';
export * from './admin';
export * from './app';
export * from './brand';
export * from './contactPerson';
export * from './contract/contract';
export * from './contract/contractActivation';
export * from './contract/contractFilter';
export * from './contract/contractList';
export * from './contract/contractOffer';
export * from './contract/contractQuery';
export * from './contractAction';
export * from './contractOption';
export * from './contractProvider';
export * from './contractTemplate';
export * from './country';
export * from './customer';
export * from './durationOptions';
export * from './errorResponse';
export * from './fuelType';
export * from './includedContractOption';
export * from './invoice';
export * from './locale';
export * from './localizationData';
export * from './login';
export * from './model';
export * from './payment';
export * from './priceCalculation';
export * from './priceSpecification';
export * from './providerBranding';
export * from './queryParams';
export * from './resetPassword';
export * from './responseErrors/calculatorResponseErrors';
export * from './responseErrors/contractResponseErrors';
export * from './responseErrors/genericResponseTypes';
export * from './responseErrors/index';
export * from './stripe/stripe';
export * from './stripe/stripeAddress';
export * from './stripe/stripeDateOfBirth';
export * from './stripe/stripeDeclineChargeOn';
export * from './stripe/stripeExternalAccount';
export * from './stripe/stripeLegalEntity';
export * from './stripe/stripeOwner';
export * from './stripe/stripeVerification';
export * from './termsOfService';
export * from './translation';
export * from './user';
export * from './userConfiguration/tableUserConfiguration';
export * from './userConfiguration/userConfiguration';
export * from './vatLookup';
export * from './vehicle';
export * from './vehicleContracts';
export * from './workshopOperation';
