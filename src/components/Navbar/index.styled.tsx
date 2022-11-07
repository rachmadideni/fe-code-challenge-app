import { AppBar, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { neutralColors } from "../../styles/colors";

const StyledAppBar = styled(AppBar)(
    ({ theme }) => `
  justify-content: center;
  min-height: 80px;
  background-color: ${theme.palette.mode === "light"
            ? neutralColors.gray[100]
            : neutralColors.blue[500]
        };
  box-shadow: ${theme.palette.mode === "light" ? "0px 0px 8px #cccccc" : "none"
        };  
`
);

const StyledIconButton = styled(IconButton)`
  &:hover {
    background-color: transparent;
  }
`;

export { StyledAppBar, StyledIconButton };
