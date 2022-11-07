import { useContext } from "react";
import { Container, Toolbar, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import ColorModeContext from "../../context";

import {
    StyledAppBar,
    StyledIconButton
} from "./index.styled"

const Navbar = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    return (
        <StyledAppBar color="neutral" position="static">
            <Container maxWidth="desktop">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        component="div"
                        fontWeight={800}
                        sx={{ flexGrow: 1 }}
                    >
                        Where in the World?
                    </Typography>
                    <StyledIconButton
                        color="inherit"
                        onClick={colorMode.toggleColorMode}
                    >
                        <FontAwesomeIcon icon={theme.palette.mode === 'dark' ? faMoon : faSun} />
                    </StyledIconButton>
                    <Typography variant="body1" fontWeight="bold" sx={{ textTransform: "capitalize" }}>
                        {theme.palette.mode} Mode
                    </Typography>
                </Toolbar>
            </Container>
        </StyledAppBar>
    );
};

export default Navbar;
