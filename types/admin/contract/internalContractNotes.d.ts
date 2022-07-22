export interface IInternalContractNoteResponse {
    internalContractNoteId: number
    note: string
    date: Date
    writtenByUser?: string
    contractPrettyIdentifier?: string
    writtenByCurrentUser?: boolean
    attachments: Attachment[]
}

export interface IInternalContractNoteRequest {
    internalContractNoteId?: number
    note: string
    date?: Date
    attachments?: File[]
}

export interface Attachment {
    fileName: string
    originalFileName: string
    url: string
    fileType: string
}
