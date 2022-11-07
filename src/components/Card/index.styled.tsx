import { Card, CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";
import { neutralColors } from "../../styles/colors";

const StyledCard = styled(Card)(
    ({ theme }) => `    
    min-height: 320px;
    background-color: ${theme.palette.mode === "dark"
            ? neutralColors.blue[500]
            : neutralColors.gray[100]
        };
    box-shadow: ${theme.palette.mode === "light"
            ? `0px 0px 10px ${neutralColors.gray[500]}`
            : "none"
        };
`
);

const StyledCardAction = styled(CardActionArea)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 320px;
`;

export { StyledCard, StyledCardAction };
