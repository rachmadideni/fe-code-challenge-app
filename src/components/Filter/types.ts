import { ChangeEvent, InputHTMLAttributes } from "react";
export interface IFilter extends InputHTMLAttributes<HTMLInputElement> {
    value: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}