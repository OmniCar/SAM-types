"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContractState;
(function (ContractState) {
    ContractState[ContractState["Draft"] = 1] = "Draft";
    ContractState[ContractState["Offer"] = 100] = "Offer";
    ContractState[ContractState["OfferExpired"] = 110] = "OfferExpired";
    ContractState[ContractState["OfferRevoked"] = 120] = "OfferRevoked";
    ContractState[ContractState["OfferRejected"] = 130] = "OfferRejected";
    ContractState[ContractState["Active"] = 200] = "Active";
    ContractState[ContractState["ActivePrePaid"] = 210] = "ActivePrePaid";
    ContractState[ContractState["ActivePendingTermination"] = 250] = "ActivePendingTermination";
    ContractState[ContractState["Suspended"] = 400] = "Suspended";
    ContractState[ContractState["Terminated"] = 500] = "Terminated";
    ContractState[ContractState["Extended"] = 510] = "Extended";
    ContractState[ContractState["Expired"] = 600] = "Expired";
    ContractState[ContractState["Completed"] = 800] = "Completed";
    ContractState[ContractState["Settled"] = 900] = "Settled";
    ContractState[ContractState["SettledPrePaid"] = 950] = "SettledPrePaid";
})(ContractState = exports.ContractState || (exports.ContractState = {}));
var WarrantyState;
(function (WarrantyState) {
    WarrantyState[WarrantyState["Active"] = 200] = "Active";
    WarrantyState[WarrantyState["Rejected"] = 300] = "Rejected";
    WarrantyState[WarrantyState["Terminated"] = 500] = "Terminated";
})(WarrantyState = exports.WarrantyState || (exports.WarrantyState = {}));
var DbType;
(function (DbType) {
    DbType[DbType["int"] = 1] = "int";
    DbType[DbType["text"] = 2] = "text";
    DbType[DbType["date"] = 3] = "date";
    DbType[DbType["monetary"] = 4] = "monetary";
    DbType[DbType["mileage"] = 5] = "mileage";
})(DbType = exports.DbType || (exports.DbType = {}));
var AggregateType;
(function (AggregateType) {
    AggregateType[AggregateType["sum"] = 1] = "sum";
    AggregateType[AggregateType["concat"] = 2] = "concat";
    AggregateType[AggregateType["count"] = 3] = "count";
})(AggregateType = exports.AggregateType || (exports.AggregateType = {}));
var FormattingLocale;
(function (FormattingLocale) {
    FormattingLocale[FormattingLocale["sv-SE"] = 0] = "sv-SE";
    FormattingLocale[FormattingLocale["uk-UA"] = 1] = "uk-UA";
    FormattingLocale[FormattingLocale["da-DK"] = 2] = "da-DK";
    FormattingLocale[FormattingLocale["en-GB"] = 3] = "en-GB";
    FormattingLocale[FormattingLocale["fi-FI"] = 4] = "fi-FI";
    FormattingLocale[FormattingLocale["en-US"] = 5] = "en-US";
})(FormattingLocale = exports.FormattingLocale || (exports.FormattingLocale = {}));
var ContractActionType;
(function (ContractActionType) {
    ContractActionType[ContractActionType["createAndActivateInV4"] = 90] = "createAndActivateInV4";
    ContractActionType[ContractActionType["create"] = 100] = "create";
    ContractActionType[ContractActionType["sendDraft"] = 120] = "sendDraft";
    ContractActionType[ContractActionType["buyNow"] = 130] = "buyNow";
    ContractActionType[ContractActionType["createOffer"] = 140] = "createOffer";
    ContractActionType[ContractActionType["sendOfferReminderMail"] = 150] = "sendOfferReminderMail";
    ContractActionType[ContractActionType["softBounce"] = 1510] = "softBounce";
    ContractActionType[ContractActionType["hardBounce"] = 1512] = "hardBounce";
    ContractActionType[ContractActionType["dnsError"] = 1513] = "dnsError";
    ContractActionType[ContractActionType["sendContractTerminationMail"] = 151] = "sendContractTerminationMail";
    ContractActionType[ContractActionType["sendOfferReminderMail2"] = 152] = "sendOfferReminderMail2";
    ContractActionType[ContractActionType["sendContractActivationMail"] = 153] = "sendContractActivationMail";
    ContractActionType[ContractActionType["sendOfferReminderMail3"] = 154] = "sendOfferReminderMail3";
    ContractActionType[ContractActionType["sendContractSuspendedMail"] = 155] = "sendContractSuspendedMail";
    ContractActionType[ContractActionType["sendContractOfferCreatedMail"] = 156] = "sendContractOfferCreatedMail";
    ContractActionType[ContractActionType["resendContractOfferMail"] = 1565] = "resendContractOfferMail";
    ContractActionType[ContractActionType["sendOfferToOneselfMail"] = 1566] = "sendOfferToOneselfMail";
    ContractActionType[ContractActionType["sendContractReactivationMail"] = 157] = "sendContractReactivationMail";
    ContractActionType[ContractActionType["sendContractAdjustmentMail"] = 158] = "sendContractAdjustmentMail";
    ContractActionType[ContractActionType["sendContractSettlementMail"] = 159] = "sendContractSettlementMail";
    ContractActionType[ContractActionType["rejectOffer"] = 160] = "rejectOffer";
    ContractActionType[ContractActionType["acceptOffer"] = 180] = "acceptOffer";
    ContractActionType[ContractActionType["approveOffer"] = 200] = "approveOffer";
    ContractActionType[ContractActionType["activate"] = 300] = "activate";
    ContractActionType[ContractActionType["sendAndActivateInV4"] = 1300] = "sendAndActivateInV4";
    ContractActionType[ContractActionType["expire"] = 400] = "expire";
    ContractActionType[ContractActionType["expireContract"] = 410] = "expireContract";
    ContractActionType[ContractActionType["sendContractExpiredMail"] = 411] = "sendContractExpiredMail";
    ContractActionType[ContractActionType["changeVehicleData"] = 420] = "changeVehicleData";
    ContractActionType[ContractActionType["changeCustomerData"] = 440] = "changeCustomerData";
    ContractActionType[ContractActionType["changePaymentData"] = 460] = "changePaymentData";
    ContractActionType[ContractActionType["modify"] = 500] = "modify";
    ContractActionType[ContractActionType["createPendingTermination"] = 550] = "createPendingTermination";
    ContractActionType[ContractActionType["cancelPendingTermination"] = 560] = "cancelPendingTermination";
    ContractActionType[ContractActionType["suspend"] = 600] = "suspend";
    ContractActionType[ContractActionType["successfulInvoicePayment"] = 690] = "successfulInvoicePayment";
    ContractActionType[ContractActionType["reactivate"] = 700] = "reactivate";
    ContractActionType[ContractActionType["sendAndReactivateInV4"] = 1700] = "sendAndReactivateInV4";
    ContractActionType[ContractActionType["extending"] = 710] = "extending";
    ContractActionType[ContractActionType["pauseSubscription"] = 720] = "pauseSubscription";
    ContractActionType[ContractActionType["terminate"] = 800] = "terminate";
    ContractActionType[ContractActionType["sendAndInactivateInV4"] = 1800] = "sendAndInactivateInV4";
    ContractActionType[ContractActionType["registerCashPayment"] = 810] = "registerCashPayment";
    ContractActionType[ContractActionType["registerCashPayout"] = 820] = "registerCashPayout";
    ContractActionType[ContractActionType["registerProviderPayment"] = 830] = "registerProviderPayment";
    ContractActionType[ContractActionType["createStripeRefund"] = 840] = "createStripeRefund";
    ContractActionType[ContractActionType["registerRefundedCharge"] = 850] = "registerRefundedCharge";
    ContractActionType[ContractActionType["createStripeInvoice"] = 860] = "createStripeInvoice";
    ContractActionType[ContractActionType["registerPaidInvoice"] = 870] = "registerPaidInvoice";
    ContractActionType[ContractActionType["registerCredit"] = 880] = "registerCredit";
    ContractActionType[ContractActionType["settle"] = 900] = "settle";
    ContractActionType[ContractActionType["archive"] = 1000] = "archive";
})(ContractActionType = exports.ContractActionType || (exports.ContractActionType = {}));
var PaymentFailureReason;
(function (PaymentFailureReason) {
    PaymentFailureReason[PaymentFailureReason["expiredCard"] = 10] = "expiredCard";
    PaymentFailureReason[PaymentFailureReason["authenticationRequired"] = 20] = "authenticationRequired";
    PaymentFailureReason[PaymentFailureReason["insufficientFunds"] = 30] = "insufficientFunds";
    PaymentFailureReason[PaymentFailureReason["withdrawalCountLimitExceeded"] = 40] = "withdrawalCountLimitExceeded";
    PaymentFailureReason[PaymentFailureReason["invalidAmount"] = 50] = "invalidAmount";
    // If the amount appears to be correct, the customer needs to check with their card issuer.
    PaymentFailureReason[PaymentFailureReason["fraudLostStolen"] = 60] = "fraudLostStolen";
    // The card is reported lost or stolen. The specific reason for the decline shouldn't be reported to the customer.
    // Instead, it needs to be presented as a generic_decline.
    PaymentFailureReason[PaymentFailureReason["attemptPaymentAgain"] = 70] = "attemptPaymentAgain";
    // Recommended you not retry charges more than four times.
    PaymentFailureReason[PaymentFailureReason["incorrectData"] = 80] = "incorrectData";
    PaymentFailureReason[PaymentFailureReason["contactCardIssuer"] = 90] = "contactCardIssuer";
    PaymentFailureReason[PaymentFailureReason["unknownReason"] = 100] = "unknownReason";
})(PaymentFailureReason = exports.PaymentFailureReason || (exports.PaymentFailureReason = {}));
var OfferRequestState;
(function (OfferRequestState) {
    OfferRequestState[OfferRequestState["Pending"] = 100] = "Pending";
    OfferRequestState[OfferRequestState["Approved"] = 200] = "Approved";
    OfferRequestState[OfferRequestState["Rejected"] = 300] = "Rejected";
    OfferRequestState[OfferRequestState["Expired"] = 400] = "Expired";
})(OfferRequestState = exports.OfferRequestState || (exports.OfferRequestState = {}));
var ResponseWarnings;
(function (ResponseWarnings) {
    ResponseWarnings[ResponseWarnings["GenericWarning"] = 499] = "GenericWarning";
})(ResponseWarnings = exports.ResponseWarnings || (exports.ResponseWarnings = {}));
var WarrantyOnboardingConfig;
(function (WarrantyOnboardingConfig) {
    WarrantyOnboardingConfig["interdan"] = "Interdan";
})(WarrantyOnboardingConfig = exports.WarrantyOnboardingConfig || (exports.WarrantyOnboardingConfig = {}));
var OutageSeverityLevel;
(function (OutageSeverityLevel) {
    OutageSeverityLevel[OutageSeverityLevel["Low"] = 1] = "Low";
    OutageSeverityLevel[OutageSeverityLevel["Medium"] = 2] = "Medium";
    OutageSeverityLevel[OutageSeverityLevel["High"] = 3] = "High";
})(OutageSeverityLevel = exports.OutageSeverityLevel || (exports.OutageSeverityLevel = {}));
var SettlementPaymentType;
(function (SettlementPaymentType) {
    SettlementPaymentType[SettlementPaymentType["cashPayout"] = 1] = "cashPayout";
    SettlementPaymentType[SettlementPaymentType["cashPayment"] = 2] = "cashPayment";
    SettlementPaymentType[SettlementPaymentType["stripeRefund"] = 3] = "stripeRefund";
    SettlementPaymentType[SettlementPaymentType["stripePayment"] = 4] = "stripePayment";
    SettlementPaymentType[SettlementPaymentType["providerPayment"] = 5] = "providerPayment";
    SettlementPaymentType[SettlementPaymentType["customerCredit"] = 6] = "customerCredit";
})(SettlementPaymentType = exports.SettlementPaymentType || (exports.SettlementPaymentType = {}));
var ReleaseSystem;
(function (ReleaseSystem) {
    ReleaseSystem[ReleaseSystem["Admin"] = 1] = "Admin";
    ReleaseSystem[ReleaseSystem["Superadmin"] = 2] = "Superadmin";
    ReleaseSystem[ReleaseSystem["Api"] = 3] = "Api";
    ReleaseSystem[ReleaseSystem["WebShop"] = 4] = "WebShop";
})(ReleaseSystem = exports.ReleaseSystem || (exports.ReleaseSystem = {}));
var ReleaseType;
(function (ReleaseType) {
    ReleaseType[ReleaseType["Major"] = 1] = "Major";
    ReleaseType[ReleaseType["Minor"] = 2] = "Minor";
    ReleaseType[ReleaseType["Emergency"] = 3] = "Emergency";
})(ReleaseType = exports.ReleaseType || (exports.ReleaseType = {}));
//# sourceMappingURL=index.js.map