import { ReleaseSystem, ReleaseTag } from '../index'
import { IsoLocale } from '../locale'

export interface IReleaseDescription {
  releaseDescriptionId?: number
  description: string
  locale: IsoLocale
}

export interface IReleaseVersionRequest {
  version: string
  releaseSystem: ReleaseSystem
  releaseDate: string
}

export interface IReleaseNoteRequest {
  releaseVersionId: number
  descriptions: IReleaseDescription[]
  releaseTag: ReleaseTag
}

export interface IReleaseVersionResponse extends IReleaseVersionRequest {
  releaseVersionId: number
  published: boolean
}

export interface IReleaseNoteResponse extends IReleaseNoteRequest {
  releaseNoteId: number
}

export interface IReleaseNotesResponse extends IReleaseVersionResponse {
  releaseNotes: IReleaseNoteResponse[]
}
