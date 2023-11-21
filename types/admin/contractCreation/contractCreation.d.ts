import { IContractDetailsRecord } from '..'
import { DurationOptions, IContractOptionResponse } from '../..'
import { PriceSource, IContractTemplateResponse, IGenericContractTemplateResponse } from '../../contractTemplate'
import { PaymentGateway, PaymentType } from '../../payment'
import { Vehicle, VehicleAlongItsContracts, IVehicleInfo } from '../../vehicle'
import { IAdminCustomer } from '../customer/customer'
import { ICarCollection } from './carData'
import { IContractCalculationResponse } from './priceCalculation'
import { PriceSpecification } from './../../priceSpecification'
import { ITermsOfServiceResponse } from '../../termsOfService'
import { Other } from '../../product'

export type ContractType = 'STANDARD' | 'CUSTOM' | 'EXTERNAL'

export type ServiceContractFlag = 'DISTRIBUTE_DOWNPAYMENT' | 'NULLIFY_DOWNPAYMENT'

export interface IContractCreationData {
  payment: IContractCreationPayment
  termsOfTradeRef?: string
  externalWarrantiesEnabled?: boolean
  externalWarrantiesShowComponent?: boolean
  externalWarrantiesShowButton?: boolean
  cars: ICarCollection
  templates: IGenericContractTemplateResponse[]
  templatesAllDisabled?: boolean
}

export interface IProviderHasAccessToProductsRequest {
  providerId: number | string
}

export interface IProviderHasAccessToProductsResponse {
  hasAccess: boolean
}

export interface IContractCreationPayment {
  stripeToken: string
  paymentGateways: PaymentGateway[]
}

export type ContractValueTypeEnum = 'Mileage' | 'Hours' | 'Services' | 'None'
export type ContractValueType = Exclude<ContractValueTypeEnum, 'None'> | undefined

interface ICommonContractUpdateRequest {
  priceSource?: PriceSource
  contractProviderId: number
  contractTemplateId: number | null
  serviceVariantId: string
  serviceVariantName: string
  value?: number
  valueType: ContractValueType
  duration: number
  mileage?: number
  optionIds: number[]
  providerPayments: number
  providerShare: number
  reference?: string
  startMileage?: number
  startValue?: number
  startValueType: ContractValueType
  type: ContractType
}

interface ISubscription {
  amountPrPayment: PriceSpecification
  firstPaymentDate: Date
  lastPaymentDate: Date
  numberOfPayments: number
}

interface IOptionInfo {
  name: string
  abbreviation: string
  description: string
  termsOfService?: ITermsOfServiceResponse | null
}

interface IContractInfo {
  templateName: string
  prettyIdentifier: string
  minimumPaymentsCount: null | number
  termsUrl: string
  duration: number
  mileage: number
  value: number | undefined
  startMileage: number
  startDate: Date
  endDate: Date
  includedOptions: IOptionInfo[]
  additionalOptions: IOptionInfo[]
  startValue: number | undefined
  startValueType: ContractValueType | undefined
  valueType: ContractValueType | undefined
}

interface IContractProviderPaymentInfo {
  administrativeName: string
  address: string
  postal_code: string
  city: string
  phone: string
  termsUrl: string
}
interface IPublicKeyResponse {
  publicKey: string
  stripeAccount: string
}
/*
 * The folling info is only what the paying "customer" needs to know
 * when presenting this info. For more specific and sensitive info,
 * it is already saved on the database.
 */
interface IPaymentInformationResponse {
  publicKey: string
  contractProvider: IContractProviderPaymentInfo
  customer: IAdminCustomer
  product: Vehicle | Other
  contract: IContractInfo
  totalAmount: PriceSpecification | null
  minimumTotalAmount: PriceSpecification | null
  downpayment: PriceSpecification
  subscriptions: ISubscription[]
  paymentGateway: PaymentGateway
}

interface ISetupIntentResponse {
  clientSecret: string
}

interface ISetPaymentMethodRequest {
  contractId: string | number
  paymentMethodId: string
}
interface ISetPaymentMethodResponse {
  status: 'processing' | 'succeeded'
}

interface ICommonContractCreationRequest extends ICommonContractUpdateRequest {
  contractTemplateName: string
  product: Vehicle | Other
  paymentGateway: PaymentGateway
  customerId?: number
  customer?: IAdminCustomer
  invoiceCustomerId?: number
  invoiceCustomer?: IAdminCustomer
  isDownpaymentDistributed: boolean
}

export interface IContractAdjustmentRequest extends ICommonContractUpdateRequest {
  amountPerPayment?: number
}

export interface ICustomContractCreationRequest extends ICommonContractCreationRequest {
  type: 'CUSTOM'
  amountPerPayment: number
  offerRequestId?: number
  offerRequestApprovalMessage?: string
}

export interface IStandardContractCreationRequest extends ICommonContractCreationRequest {
  type: 'STANDARD'
}

export interface IStandardV4PricingToolContractCreationRequest extends IStandardContractCreationRequest {
  vehicleInfo: IVehicleInfo
  v4ProviderId: number
  v4ProductId: number
}

export interface IStandardV4PricingToolContractPrintCreationRequest
  extends IStandardV4PricingToolContractCreationRequest {
  type: 'STANDARD'
  amountPerPayment?: number
  adjustedFrom?: string
  isAdjustment?: boolean
}

export interface IContractPrintCreationRequest extends ICommonContractCreationRequest {
  type: 'STANDARD' | 'CUSTOM'
  amountPerPayment?: number
  adjustedFrom?: string
  isAdjustment?: boolean
}

/**
 * @deprecated warrantyId Not needed, if using the "NEW WAY" and V4PT, this will be loaded from the already saved contract.
 * @deprecated modelModelId
 * @deprecated finlandPriceId
 */
export interface ICreateDelaerPaidContractRequest {
  prettyIdentifier: string | null
  warrantyId: number | null // SAM Warranty ID.
  warrantyLengthMonths: number
  modelModelId?: number
  vehicleAlongItsContracts: Vehicle | VehicleAlongItsContracts
  startMileage: number
  customerId?: number
  customer?: IAdminCustomer
  startDate?: Date
  finlandPriceId?: number
  endMileage?: number // For debugging.
  reference?: string
}

export interface ICreateDelaerPaidContractResponse {
  req: ICreateDelaerPaidContractRequest
  success: boolean
  error: string
  startDate: Date
  endDate: Date
  warrantyType: string
  customerId: number
}

export interface IAvailableFreeWarrantyRequest {
  vehicleId?: number // Vehicle or OtherProduct id
  vin: string
  regNumber: string
  regDate: string
  modelModelId?: number
  brandName: string
  brandId?: number
  vehicleModelName: string
  vehicleModelId?: number
  modelYear: number
  engineMaxPower?: number // Maximum power in kW, integer or decimal number like 132 or 115.5.
  fuelTypeName: string
  fuelTypeId?: number
  startMileage: number
}

export interface IAvailableFreeWarrantyResponse {
  vehicleHasActiveWarranty: boolean
  minMilageDiffPerYear: number
  availableWarranties: IAvailableFreeWarranty[]
}

export interface IAvailableFreeWarrantyDurationPrice {
  allowedDistanceMileage: undefined | number // Allowed driving limit/distance during this Warranty duration.
  allowedPowerV4Interval:
    | undefined
    | {
        lookedUpEngineMaxPower: number
        minEngineMaxPower: number
        maxEngineMaxPower: number
      }
  customerPrice: PriceSpecification | null
  durationMonths: number
  finlandPriceId?: number
  totalPrice: PriceSpecification
  isEnabledAndAvailable?: boolean | null // Dependent of optional user setting for this DurationPrice-group or default setting in WarrantyData.
  debug?: any // For debugging purposes.
}

export interface IAvailableFreeWarranty {
  warrantyId: number
  warrantyName: string
  description: string
  maxYears: number
  oneTimeFeeYear: PriceSpecification
  externalId: number
  calculationMethod: 100 | 200
  maxStartMileage: number
  maxEndMileage: number // The absolute maximum End-Mileage Odometer reading for this product.
  maxStartHours?: number
  maxEndHours?: number
  maxStartServices?: number
  maxEndServices?: number
  warrantyTermsRef: string
  contractStartDate: Date
  durationsPrices: IAvailableFreeWarrantyDurationPrice[]
  weight: number
  warrantyColor: string
  warrantyBGColor: string | null
  fuelTypes: null | string[] // Only available for these fuelTypes, null means all fuelTypes.
  isForbidDealerPaid: boolean
}

export interface IContractCreationResponse {
  serviceContractId: number
  prettyIdentifier: string
}

export interface IAdminContractActivationRequest {
  paymentGateway: PaymentGateway
  paymentType: PaymentType
  creditCardToken?: string
}

export interface IAdminContractActivationResponse {
  serviceContract: IContractDetailsRecord
}

export interface IAdminContractResponse {
  type: ContractType
  contractName: string
  product: Vehicle | Other
  contractTemplate: IContractTemplateResponse
  additionalOptions: IContractOptionResponse[]
  includedAdditionalOptions: IContractOptionResponse[]
  durations: DurationOptions[]
  duration: number
  mileage: number
  startMileage: number
  value: number | undefined
  valueType: ContractValueType
  startValue: number | undefined
  startValueType: ContractValueType
  paymentGateway: PaymentGateway
  customerId: number
  customer: IAdminCustomer
  availableTemplatesExtension?: IContractTemplateResponse[]
  availableDurationsExtension?: DurationOptions[]
}

export interface IAdminContractAdjustmentResponse extends IAdminContractResponse {
  payments: IContractCalculationResponse
  invoiceCustomerId: number
  invoiceCustomer: IAdminCustomer
}

export interface IAdminContractOfferCopyResponse extends IAdminContractResponse {
  payments: Partial<IContractCalculationResponse>
  reference: string
  customTerms: string
}

export interface IContractOfferPrintData {
  token: string
}
