import { Language } from "./language.model";

export interface Exercise {
    name: string;
    description: string;
    solution?: string;
    language: Language;
    id?: number;
}
