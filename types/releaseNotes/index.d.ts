import {
  ReleaseSystem,
  ReleaseTag,
  // ReleaseType
} from '../index'
import { IsoLocale } from '../locale'

export interface IReleaseDescription {
  releaseDescriptionId?: number
  description: string
  locale: IsoLocale
}

export interface IReleaseVersionRequest {
  version: string
  // descriptions: IReleaseDescription[]
  releaseSystem: ReleaseSystem
  // releaseType: ReleaseType
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

// export interface IReleaseNoteImageResponse {
//   releaseNoteImageId: number
//   fileName: string
//   publicUrl: string
//   releaseNoteId: number
// }
