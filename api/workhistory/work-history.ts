import { IDictionary } from "../../common/IDictionary";

export interface WorkHistory {
    id: number;
    company: string;
    years: number;
    description: string;
    image: string;
}

export interface WorkHistories extends IDictionary<WorkHistory> { }