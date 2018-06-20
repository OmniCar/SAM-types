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
export { IAddressRequest, IAddressResponse } from './address';
export { App } from './app';
export { Brand } from './brand';
export { IContactPersonRequest, IContactPersonResponse } from './contactPerson';
export { IContractResponse } from './contract/contract';
export { IContractActivationRequest } from './contract/contractActivation';
export { IContractFilterOptions, IContractFilterOption } from './contract/contractFilter';
export { IContractOfferRequest, IContractOfferResponse } from './contract/contractOffer';
export { IContractDetailsResponse } from './contract/contractDetails';
export { IIncludedContractOption } from './includedContractOption';
export { ContractOrderBy, IContractQuery, IMappedContractQuery, IContractSearchResult } from './contract/contractQuery';
export { IContractOptionRequest, IContractOptionResponse } from './contractOption';
export { IContractProviderRequest, IContractProviderResponse } from './contractProvider';
export { IContractTemplateRequest, IContractTemplateResponse, IContractTemplateCloneRequest } from './contractTemplate';
export { ICountryRequest, ICountryResponse } from './country';
export { IInvoice, InvoiceState, InvoiceOrderBy } from './invoice';
export { Customer } from './customer';
export { DurationOptions } from './durationOptions';
export { ApiError } from './errorResponse';
export { FuelType } from './fuelType';
export { Locale } from './locale';
export { LocalizationData } from './localizationData';
export { Model } from './model';
export { PaymentCard } from './paymentCard';
export { PaymentPlan } from './paymentPlan';
export { ICalculationRequest, ICalculationResponse } from './priceCalculation';
export { PriceSpecification } from './priceSpecification';
export { IBrandingPayloadResponse, IStripeInformationResponse, IProviderInformationResponse, IProviderBrandingResponse, IProviderStylingResponse } from './providerBranding';
export { CalculatorResponseErrors } from './responseErrors/calculatorResponseErrors';
export { ContractResponseErrors } from './responseErrors/contractResponseErrors';
export { GenericResponseErrors } from './responseErrors/genericResponseTypes';
export { ResponseErrors } from './responseErrors/index';
export { ISearchQuery, OrderDirection, IPaginatedResult } from './searchQuery';
export { StripeGenderType, StripeCountryType, StripeCurrencyType, StripeEntityType } from './stripe/stripe';
export { IStripe, IStripeResponse, IStripeRequest } from './stripe/stripe';
export { IStripeAddress } from './stripe/stripeAddress';
export { IStripeVerification } from './stripe/stripeVerification';
export { IStripeDateOfBirth } from './stripe/stripeDateOfBirth';
export { IStripeDeclineChargeOn } from './stripe/stripeDeclineChargeOn';
export { IStripeExternalAccount, IStripeExternalAccountResponse } from './stripe/stripeExternalAccount';
export { IStripeLegalEntity } from './stripe/stripeLegalEntity';
export { IStripeOwner } from './stripe/stripeOwner';
export { ITermsOfServiceRequest, ITermsOfServiceResponse } from './termsOfService';
export { Translation } from './translation';
export { ITableUserConfiguration, IColumnConfiguration, UserConfigurationType } from './userConfiguration/tableUserConfiguration';
export { Vehicle } from './vehicle';
export { VehicleContracts } from './vehicleContracts';
export { ILoginRequest, ILoginResponse } from './login';
export { IResetPasswordRequest } from './resetPassword';
export { IUserResponse } from './user';
export { IVatLookupRequest, IVatLookupResponse } from './vatLookup';
export { IContractActionResponse, ActionOrderBy } from './contractAction';
export { IWorkshopOperation, WorkshopOrderBy } from './workshopOperation';
