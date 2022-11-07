import { ButtonHTMLAttributes, MouseEvent } from "react";

export interface IFlagCard extends ButtonHTMLAttributes<HTMLButtonElement> {
    country: {
        name: {
            common: string;
        };
        flags: {
            svg: string;
        };
        population: string;
        region: string;
        capital: string[];
    };

    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
