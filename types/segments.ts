/**
 * @deprecated Since 2021 Nov - This whole file is to be made obsolete. Due to segments seems only be used in the api
 * and some functionality seems crippeled when used in sam-types.
 */

/** @deprecated Use the one in sam-api/types/ */
export type TSAMBaseSegment = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'LT' | 'LV' | 'MT' | 'S' | 'ST' | 'SV'
/** @deprecated Use the one in sam-api/types/ */
export type TWarrantySegment = 'WS' | 'WSS' | 'WUS'
/** @deprecated Use the one in sam-api/types/ */
export type TExtraSegment =
  | TSegmentA
  | TSegmentB
  | TSegmentC
  | TSegmentD
  | TSegmentE
  | TSegmentF
  | TSegmentG
  | TSegmentH
  | TSegmentI
  | TSegmentJ
  | TSegmentK

/** @deprecated Use the one in sam-api/types/ */
export type TSAMSegment = TSAMBaseSegment | TExtraSegment

// NOTE: For this TExtraSegment to work properly, it is required that the array(s)
// are defined at compile-time (not at run-time dynamically).
const segmentA = ['A', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9'] as const
const segmentB = ['B', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9'] as const
const segmentC = ['C', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9'] as const
const segmentD = ['D', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9'] as const
const segmentE = ['E', 'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9'] as const
const segmentF = ['F', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9'] as const
const segmentG = ['G', 'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9'] as const
const segmentH = ['H', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9'] as const
const segmentI = ['I', 'I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8', 'I9'] as const
const segmentJ = ['J', 'J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9'] as const
const segmentK = ['K', 'K1', 'K2', 'K3', 'K4', 'K5', 'K6', 'K7', 'K8', 'K9'] as const

/** @deprecated Use the one in sam-api/types/ */
export const validExtraSegments = [
  ...segmentA,
  ...segmentB,
  ...segmentC,
  ...segmentD,
  ...segmentE,
  ...segmentF,
  ...segmentG,
  ...segmentH,
  ...segmentI,
  ...segmentJ,
  ...segmentK,
]

type TSegmentA = typeof segmentA[number]
type TSegmentB = typeof segmentB[number]
type TSegmentC = typeof segmentC[number]
type TSegmentD = typeof segmentD[number]
type TSegmentE = typeof segmentE[number]
type TSegmentF = typeof segmentF[number]
type TSegmentG = typeof segmentG[number]
type TSegmentH = typeof segmentH[number]
type TSegmentI = typeof segmentI[number]
type TSegmentJ = typeof segmentJ[number]
type TSegmentK = typeof segmentK[number]
