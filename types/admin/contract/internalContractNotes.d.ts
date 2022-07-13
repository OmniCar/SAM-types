import { IAdminUserInfo } from "../user"

export interface IInternalContractNoteResponse {
    internalContractNoteId: number
    note: string
    date: Date
    pinnedToTop: boolean
    writtenByUser: IAdminUserInfo | undefined
    fromOldContract: boolean | undefined
    writtenByCurrentUser: boolean | undefined
}

export interface IInternalContractNoteRequest {
    internalContractNoteId?: number
    note: string
    date: Date
    pinnedToTop: boolean
}
