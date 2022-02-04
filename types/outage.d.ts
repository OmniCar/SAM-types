import { OutageSeverityLevel } from "./index";

export interface IOutageResponse {
    headerText: string | null
    message: string | null
    date: Date
    disabledPaths: string[] | null
    severityLevel: OutageSeverityLevel | null
}
