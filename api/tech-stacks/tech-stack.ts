import { IDictionary } from "../../common/IDictionary";

export interface TechStack {
    id: number;
    name: string;
    years: number;
    description: string;
    image: string;
}

export interface TechStacks extends IDictionary<TechStack> { }