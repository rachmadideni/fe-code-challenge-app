import { ChangeEvent } from "react";
export interface ISelect {
    value: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    items: string[];
    placeholder?: string;
}