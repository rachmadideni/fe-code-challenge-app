import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { neutralColors } from "../../styles/colors";

const StyledTextField = styled(TextField)(
    ({ theme }) => `
    background-color: ${theme.palette.mode === "dark" ? neutralColors.blue[500] : "white"
        };
    box-shadow: ${theme.palette.mode === "light" ? "0px 0px 8px #cccccc" : "none"
        };
    border: none;
    & fieldset {
    border: none;
}

    & .MuiOutlinedInput - root {
        &.Mui - focused fieldset {
        border - color: #fafafa;
    }
    &:hover fieldset {
        border: none;
    }
}
`
);

export { StyledTextField };
