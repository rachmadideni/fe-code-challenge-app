import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { neutralColors } from "../styles/colors";

const PageContainer = styled(Grid)(({ theme }) => `
  background-color: ${theme.palette.mode === 'dark' ? neutralColors.blue[800] : neutralColors.gray[100]};  
`);

export default PageContainer;