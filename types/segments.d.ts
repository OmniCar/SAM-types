/**
 * @deprecated Since 2021 Nov - This whole file is to be made obsolete. Due to segments seems only be used in the api
 * and some functionality seems crippeled when used in sam-types.
 */

/** @deprecated Use the one in sam-api/types/ */
export declare type TSAMBaseSegment = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'LT' | 'LV' | 'MT' | 'S' | 'ST' | 'SV'
/** @deprecated Use the one in sam-api/types/ */
export declare type TWarrantySegment = 'WS' | 'WSS' | 'WUS'
/** @deprecated Use the one in sam-api/types/ */
export declare type TExtraSegment =
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
export declare type TSAMSegment = TSAMBaseSegment | TExtraSegment
declare const segmentA: readonly ['A', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9']
declare const segmentB: readonly ['B', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9']
declare const segmentC: readonly ['C', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9']
declare const segmentD: readonly ['D', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9']
declare const segmentE: readonly ['E', 'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9']
declare const segmentF: readonly ['F', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9']
declare const segmentG: readonly ['G', 'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9']
declare const segmentH: readonly ['H', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9']
declare const segmentI: readonly ['I', 'I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8', 'I9']
declare const segmentJ: readonly ['J', 'J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9']
declare const segmentK: readonly ['K', 'K1', 'K2', 'K3', 'K4', 'K5', 'K6', 'K7', 'K8', 'K9']
/** @deprecated Use the one in sam-api/types/ */
export declare const validExtraSegments: TExtraSegment[]
declare type TSegmentA = typeof segmentA[number]
declare type TSegmentB = typeof segmentB[number]
declare type TSegmentC = typeof segmentC[number]
declare type TSegmentD = typeof segmentD[number]
declare type TSegmentE = typeof segmentE[number]
declare type TSegmentF = typeof segmentF[number]
declare type TSegmentG = typeof segmentG[number]
declare type TSegmentH = typeof segmentH[number]
declare type TSegmentI = typeof segmentI[number]
declare type TSegmentJ = typeof segmentJ[number]
declare type TSegmentK = typeof segmentK[number]
/** @deprecated Use the one in sam-api/types/ */
export {}
