import { useState, useEffect } from "react"
import { useParams, useNavigate } from 'react-router-dom'
import { Grid, Button, Typography } from "@mui/material"
import { styled } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { neutralColors } from "../styles/colors";
import useCountryBorder from '../hooks/useCountryBorder';

const StyledButton = styled(Button)(
    ({ theme }) => `    
    background-color: ${theme.palette.mode === "light" ? neutralColors.gray[100] : neutralColors.blue[500]};
    box-shadow: ${theme.palette.mode === "light" ? "0px 0px 8px #cccccc" : "none"};
    color: ${theme.palette.mode === "light" ? neutralColors.gray[500] : neutralColors.gray[100]};
    text-transform:capitalize;
    width: 130px;    
`)

const Border = () => {
    const params = useParams()
    const navigate = useNavigate();
    const [mounted, setMounted] = useState<boolean>(false)
    const [currencies, setCurrencies] = useState<string>("")
    const [languages, setLanguages] = useState<string>("")
    const [borders, setBorders] = useState<string[]>([])
    const countryCode = params.countryCode;
    const {
        countryBorder,
        isLoading: countryBorderIsLoading,
        isError: countryBorderHasErrors } = useCountryBorder(countryCode)

    useEffect(() => {
        setMounted(true);
    }, []);
    useEffect(() => {
        if (mounted && !countryBorderIsLoading && !countryBorderHasErrors) {
            const [currKey] = Object.entries(countryBorder[0]?.currencies)[0];
            const [langKey] = Object.entries(countryBorder[0]?.languages)[0];
            setCurrencies(countryBorder[0]?.currencies[currKey].name)
            setLanguages(countryBorder[0]?.languages[langKey])
            setBorders(() => "borders" in countryBorder[0] ? countryBorder[0]?.borders : ["-"])
        }
    }, [mounted, countryBorderIsLoading, countryBorder, countryBorderHasErrors])

    return (mounted && !countryBorderIsLoading && !countryBorderHasErrors) ? (
        <Grid container direction="column" sx={{
            height: "100%"
        }}>
            <Grid item desktop={12} mobile={12}>
                <StyledButton color="neutral" onClick={() => navigate(-1)}>
                    <FontAwesomeIcon icon={faArrowLeftLong} style={{ marginRight: "1rem" }} /> Back
                </StyledButton>
            </Grid>
            <Grid container direction="row" columnSpacing={4} sx={{ marginTop: "4rem" }}>
                <Grid item desktop={6} mobile={12}>
                    <img alt="country flag" src={countryBorder[0].flags?.svg} width="100%" height="auto" />
                </Grid>

                <Grid item desktop={6} mobile={12} alignItems="center" sx={{ marginTop: "2rem" }}>

                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                        {`${countryBorder[0].name.common}`}
                    </Typography>


                    <Grid container justifyContent="space-between" spacing={2}>
                        <Grid item desktop={6} mobile={12} sx={{ backgroundColor: "transparent" }}>
                            {/* left */}
                            <Grid container>
                                <Typography fontWeight="medium" component="span" gutterBottom sx={{ paddingRight: "1rem" }}>Native Name:</Typography>
                                <Typography fontWeight="regular" component="span" gutterBottom>{countryBorder[0].name.official}</Typography>
                            </Grid>
                            <Grid container>
                                <Typography fontWeight="medium" component="span" gutterBottom sx={{ paddingRight: "1rem" }}>Population:</Typography>
                                <Typography fontWeight="regular" component="span" gutterBottom>{countryBorder[0].population}</Typography>
                            </Grid>
                            <Grid container>
                                <Typography fontWeight="medium" component="span" gutterBottom sx={{ paddingRight: "1rem" }}>Region:</Typography>
                                <Typography fontWeight="regular" component="span" gutterBottom>{countryBorder[0].region}</Typography>
                            </Grid>
                            <Grid container>
                                <Typography fontWeight="medium" component="span" gutterBottom sx={{ paddingRight: "1rem" }}>Sub Region:</Typography>
                                <Typography fontWeight="regular" component="span" gutterBottom>{countryBorder[0].subregion}</Typography>
                            </Grid>
                            <Grid container>
                                <Typography fontWeight="medium" component="span" gutterBottom sx={{ paddingRight: "1rem" }}>Capital:</Typography>
                                <Typography fontWeight="regular" component="span" gutterBottom>{countryBorder[0].capital[0]}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item desktop={6} mobile={12} sx={{ backgroundColor: "transparent" }}>
                            {/* right */}
                            <Grid container>
                                <Typography fontWeight="medium" component="span" gutterBottom sx={{ paddingRight: "1rem" }}>Top Level Domain:</Typography>
                                <Typography fontWeight="regular" component="span" gutterBottom>{countryBorder[0].tld[0]}</Typography>
                            </Grid>
                            <Grid container>
                                <Typography fontWeight="medium" component="span" gutterBottom sx={{ paddingRight: "1rem" }}>Currencies:</Typography>
                                <Typography fontWeight="regular" component="span" gutterBottom>
                                    {currencies}
                                    {/* {country[0].currencies[currKey].name} */}
                                </Typography>
                            </Grid>
                            <Grid container>
                                <Typography fontWeight="medium" component="span" gutterBottom sx={{ paddingRight: "1rem" }}>Languages:</Typography>
                                <Typography fontWeight="regular" component="span" gutterBottom>
                                    {languages}
                                    {/* {country[0].languages[langKey]} */}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item desktop={12} mobile={12} sx={{ backgroundColor: "transparent" }}>
                            <Grid container direction="row" alignItems="flex-start" justifyContent="flex-start">
                                <Grid item mobile={12} sx={{ padding: "0 0 1rem 0" }}>
                                    <Typography fontWeight="medium" component="span" gutterBottom>Border Countries:</Typography>
                                </Grid>
                                <Grid container spacing={2} columnSpacing={4}>
                                    {borders.length > 0 ? borders.map((border: string, id: number) => (
                                        <Grid item key={`id-${id}`}>
                                            <StyledButton onClick={() => navigate(`/border/${border}`)}>
                                                {border}
                                            </StyledButton>
                                        </Grid>
                                    )) : "-"}

                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>

                </Grid>
            </Grid>

        </Grid>
    ) : null
}

export default Border;