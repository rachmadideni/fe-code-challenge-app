import { createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
import { neutralColors } from "./colors";

const theme = (mode: PaletteMode) =>
    createTheme({
        breakpoints: {
            values: {
                xs: 0,
                mobile: 375,
                desktop: 1440,
            },
        },
        palette: {
            mode: mode,
            neutral: {
                main: neutralColors.blue[900],
                light: "black",
                dark: neutralColors.gray[500],
                contrastText: neutralColors.blue[900],
            },
        },
        typography: {
            fontFamily: ["Nunito Sans", "sans-serif"].join(","),
            fontSize: 14,
            fontWeightRegular: 300,
            fontWeightMedium: 600,
            fontWeightBold: 800,
            body1: {
                fontSize: 14,
            },
        },
        shape: {
            borderRadius: 6,
        },
        components: {
            MuiButton: {
                defaultProps: {
                    disableRipple: true,
                },
            },
        },
    });

export default theme;
