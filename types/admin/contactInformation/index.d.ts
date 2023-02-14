export interface IContactInformation {
  id?: number
  email: string
  phone: string
  url: string
  isoName: string
}

export type ContactInformation = keyof IContactInformation
