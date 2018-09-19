type ContractUpdateErrors = 'CONTRACT_TRANSITION_INVALID_OR_ILLEGAL'
type PostContractResponseErrors = 'CONTRACT_MISSING_OR_INVALID_INFORMATION'

export type ContractResponseErrors = ContractUpdateErrors | PostContractResponseErrors
