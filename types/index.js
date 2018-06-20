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
    ContractState[ContractState["Suspended"] = 400] = "Suspended";
    ContractState[ContractState["Terminated"] = 500] = "Terminated";
    ContractState[ContractState["Completed"] = 800] = "Completed";
    ContractState[ContractState["Settled"] = 900] = "Settled";
})(ContractState = exports.ContractState || (exports.ContractState = {}));
var ContractActionType;
(function (ContractActionType) {
    ContractActionType[ContractActionType["create"] = 100] = "create";
    ContractActionType[ContractActionType["sendDraft"] = 120] = "sendDraft";
    ContractActionType[ContractActionType["sendOffer"] = 140] = "sendOffer";
    ContractActionType[ContractActionType["sendOfferReminderMail"] = 150] = "sendOfferReminderMail";
    ContractActionType[ContractActionType["sendOfferReminderMail2"] = 152] = "sendOfferReminderMail2";
    ContractActionType[ContractActionType["sendOfferReminderMail3"] = 154] = "sendOfferReminderMail3";
    ContractActionType[ContractActionType["rejectOffer"] = 160] = "rejectOffer";
    ContractActionType[ContractActionType["acceptOffer"] = 180] = "acceptOffer";
    ContractActionType[ContractActionType["approveOffer"] = 200] = "approveOffer";
    ContractActionType[ContractActionType["activate"] = 300] = "activate";
    ContractActionType[ContractActionType["expire"] = 400] = "expire";
    ContractActionType[ContractActionType["changeVehicleData"] = 420] = "changeVehicleData";
    ContractActionType[ContractActionType["changeCustomerData"] = 440] = "changeCustomerData";
    ContractActionType[ContractActionType["changePaymentData"] = 460] = "changePaymentData";
    ContractActionType[ContractActionType["modify"] = 500] = "modify";
    ContractActionType[ContractActionType["suspend"] = 600] = "suspend";
    ContractActionType[ContractActionType["reactivate"] = 700] = "reactivate";
    ContractActionType[ContractActionType["terminate"] = 800] = "terminate";
    ContractActionType[ContractActionType["settle"] = 900] = "settle";
})(ContractActionType = exports.ContractActionType || (exports.ContractActionType = {}));
//# sourceMappingURL=index.js.map