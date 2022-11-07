import {
    PaletteColorOptions,
    AppBarPropsColorOverrides,
    TextFieldPropsColorOverrides,
    ButtonPropsColorOverrides,
    TypographyPropsVariantOverrides
} from "@mui/material"

declare module "@mui/material/styles" {

    interface Palette {
        neutral: Palette['primary'];
    }

    interface PaletteOptions {
        neutral?: PaletteOptions['primary'];
    }

    interface BreakpointOverrides {
        xs: true;
        sm: false;
        md: false;
        lg: false;
        xl: false;
        mobile: true;
        desktop: true;
    }

}

declare module "@mui/material/AppBar" {
    interface AppBarPropsColorOverrides {
        neutral: true
    }
}
declare module "@mui/material/TextField" {
    interface TextFieldPropsColorOverrides {
        neutral: true
    }
}

declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
        neutral: true
    }
}

declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        neutral: true
    }
}

declare module "@mui/material/styles/createShadow" {
    interface DepthRange {
        0: string,
        1: string,
    }
    interface shadow {
        neutral: DepthRange
    }
}