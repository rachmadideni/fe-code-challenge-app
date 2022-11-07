import { CardMedia, CardContent, Typography, Box } from "@mui/material";

import { StyledCard, StyledCardAction } from "./index.styled";

import { IFlagCard } from "./types";

const FlagCard = ({ country, onClick }: IFlagCard) => {
    return (
        <StyledCard>
            <StyledCardAction onClick={onClick}>
                <CardMedia
                    component="img"
                    height="180"
                    image={country.flags.svg}
                    sx={{
                        objectFit: "cover",
                    }}
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        fontWeight="bold"
                    >
                        {country.name.common}
                    </Typography>
                    <Typography gutterBottom variant="body2" component="p">
                        <Box component="span" fontWeight="bold">
                            Population:{" "}
                        </Box>
                        {country.population}
                    </Typography>
                    <Typography gutterBottom variant="body2" component="p">
                        <Box component="span" fontWeight="bold">
                            Region:{" "}
                        </Box>
                        {country.region}
                    </Typography>
                    <Typography gutterBottom variant="body2" component="p">
                        <Box component="span" fontWeight="bold">
                            Capital:{" "}
                        </Box>
                        {country?.capital?.length > 0 ? country.capital[0] : ""}
                    </Typography>
                </CardContent>
            </StyledCardAction>
        </StyledCard>
    );
};

export default FlagCard;
