//
//
//

export interface IV4PTRequestListV4Dealers {}

export interface IV4PTRequestCheckIfProviderConnected {
  justgoProviderId: number
}

export interface IV4PTRequestConnectProviderToV4 {
  justgoProviderId: number
  v4DealerId: number
}

export interface IV4PTRequestAddNewV4Dealer {
  justgoProviderId: number
}

export interface IV4PTResponseListV4Dealers {
  indentation: [
    {
      id: number | null
      name: string | null
    },
  ]
}

export interface IV4PTResponseCheckIfProviderConnected {
  isConnected: boolean
  v4DealerId: number | null
  v4DealerName: string | null
}

export interface IV4PTResponseConnectProviderToV4 {
  isSuccess: boolean
}

export interface IV4PTResponseAddNewV4Dealer {
  isSuccess: boolean
}

//--------
// export interface IV4PTResponseAddNewV4Dealer {
//   isSuccess: boolean
// }
// export interface IV4PTResponseConnectProviderToV4 {
//   isSuccess: boolean
// }
// export interface IV4PTResponseCheckIfProviderConnected {
//   isConnected: boolean
//   v4DealerId: number | null
//   v4DealerName: string | null
// }
// export interface IV4PTResponseListV4Dealers {
//   indentation: [
//     {
//       id: number | null
//       name: string | null
//     },
//   ]
// }

// Requests and responses between API and Clients.

export interface IListV4DealersRequest extends IV4PTRequestListV4Dealers {}

export interface ICheckIfProviderConnectedRequest extends IV4PTRequestCheckIfProviderConnected {}

export interface IConnectProviderToV4Response extends IV4PTRequestConnectProviderToV4 {}

export interface IAddNewV4DealerResponse extends IV4PTRequestAddNewV4Dealer {}

export interface IListV4DealersResponse extends IV4PTResponseListV4Dealers {}

export interface ICheckIfProviderConnectedResponse extends IV4PTResponseCheckIfProviderConnected {}

export interface IConnectProviderToV4Response extends IV4PTResponseConnectProviderToV4 {}

export interface IAddNewV4DealerResponse extends IV4PTResponseAddNewV4Dealer {}
