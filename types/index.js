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
//# sourceMappingURL=index.js.map