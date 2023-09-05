import { TIsoCountry } from '../../country';
export interface ICheckIfProviderConnectedRequestFromClient {
    isoCountry: TIsoCountry;
    providerId: number;
}
export interface IListV4DealersRequestFromClient {
    isoCountry: TIsoCountry;
    searchString: string;
}
export interface IConnectProviderToV4RequestFromClient {
    isoCountry: TIsoCountry;
    providerId: number;
    v4DealerId: number;
}
export interface IDisconnectV4DealerFromProviderRequestFromClient {
    isoCountry: TIsoCountry;
    v4DealerId: number;
}
export interface IAddNewV4DealerRequestFromClient {
    isoCountry: TIsoCountry;
    providerId: number;
}
export interface ICheckIfProviderConnectedResponseToClient {
    isConnected: boolean;
    v4DealerId: number | null;
    v4DealerName: string | null;
}
export interface IListV4DealersResponseToClient {
    dealerItem: null | [{
        id: number | null;
        name: string | null;
    }];
}
export interface IConnectProviderToV4ResponseToClient {
    isSuccess: boolean;
}
export interface IDisconnectV4DealerFromProviderResponseToClient {
    isSuccess: boolean;
}
export interface IAddNewV4DealerResponseToClient {
    isSuccess: boolean;
    message?: string;
    statusCode?: number;
}
