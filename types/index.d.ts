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
export { IContractDetailsResponse } from './contract/contractDetails';
export { IContractFilterDate, IContractFilterOption, IContractFilterOptions } from './contract/contractFilter';
export { IContractOfferRequest, IContractOfferResponse } from './contract/contractOffer';
export { ActionOrderBy, IContractActionResponse } from './contractAction';
export { IContractOptionRequest, IContractOptionResponse } from './contractOption';
export { IContractProviderRequest, IContractProviderResponse } from './contractProvider';
export { IContractTemplateCloneRequest, IContractTemplateRequest, IContractTemplateResponse } from './contractTemplate';
export { ICountryRequest, ICountryResponse } from './country';
export { Customer } from './customer';
export { DurationOptions } from './durationOptions';
export { ApiError } from './errorResponse';
export { FuelType } from './fuelType';
export { IIncludedContractOption } from './includedContractOption';
export { IInvoice, InvoiceOrderBy, InvoiceState } from './invoice';
export { LocalizationData } from './localizationData';
export { ILoginRequest, ILoginResponse } from './login';
export { Model } from './model';
export { PaymentCard, PaymentGateway, PaymentPlan } from './payment';
export { ICalculationRequest, ICalculationResponse } from './priceCalculation';
export { PriceSpecification } from './priceSpecification';
export { IBrandingPayloadResponse, IProviderBrandingResponse, IProviderInformationResponse, IProviderStylingResponse, IStripeInformationResponse } from './providerBranding';
export { IResetPasswordRequest } from './resetPassword';
export { CalculatorResponseErrors } from './responseErrors/calculatorResponseErrors';
export { ContractResponseErrors } from './responseErrors/contractResponseErrors';
export { GenericResponseErrors } from './responseErrors/genericResponseTypes';
export { ResponseErrors } from './responseErrors/index';
export { IStripe, IStripeRequest, IStripeResponse, StripeCountryType, StripeCurrencyType, StripeEntityType, StripeGenderType } from './stripe/stripe';
export { IStripeAddress } from './stripe/stripeAddress';
export { IStripeDateOfBirth } from './stripe/stripeDateOfBirth';
export { IStripeDeclineChargeOn } from './stripe/stripeDeclineChargeOn';
export { IStripeExternalAccount, IStripeExternalAccountResponse } from './stripe/stripeExternalAccount';
export { IStripeLegalEntity } from './stripe/stripeLegalEntity';
export { IStripeOwner } from './stripe/stripeOwner';
export { IStripeVerification, StripeVerificationField, StripeVerificationReason } from './stripe/stripeVerification';
export { ITermsOfServiceRequest, ITermsOfServiceResponse } from './termsOfService';
export { Translation } from './translation';
export { IUserResponse } from './user';
export { IVatLookupRequest, IVatLookupResponse } from './vatLookup';
export { Vehicle } from './vehicle';
export { VehicleContracts } from './vehicleContracts';
export { IWorkshopOperation, WorkshopOrderBy } from './workshopOperation';
export { Locale, IsoLocale } from './locale';
export { ContractOrderBy, IContractQuery, IContractSearchResult } from './contract/contractQuery';
export { ISearchQuery, OrderDirection, IPaginatedResult } from './searchQuery';
export { IColumnUserConfiguration, ITableUserConfiguration, TableConfigurationType } from './userConfiguration/tableUserConfiguration';
export { UserConfigurationType, UserConfiguration } from './userConfiguration/userConfiguration';
