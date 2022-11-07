import { useState, useEffect, ChangeEvent, MouseEvent } from "react";
import { Grid, Fab } from "@mui/material";

import Filter from "../components/Filter";
import Select from "../components/Select";
import FlagCard from "../components/Card";
import { useCountries, useDebounce } from "../hooks";
import { REGIONS } from "../constants";
import { useNavigate } from "react-router-dom"

import ScrollTop from "../components/ScrollTop";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"


type CountriesItem = {
    name: {
        common: string;
    };
    region: string;
};

function Main() {
    const navigate = useNavigate();
    const { countries, isLoading, isError } = useCountries();
    const [filteredCountries, setFilteredCountries] = useState<string[]>([]);
    const [filterText, setFilterText] = useState<string>("");
    const [regionText, setRegionText] = useState<string>("");

    const debounceQuery = useDebounce<string>(filterText, 300);

    const onChangeFilterText = (evt: ChangeEvent<HTMLInputElement>) => {
        setFilterText(evt.target.value);
    };

    const onChangeRegion = (evt: ChangeEvent<HTMLInputElement>) => {
        setRegionText(evt.target.value);
    };

    useEffect(() => {
        setFilteredCountries(countries);
    }, [countries]);

    useEffect(() => {
        try {
            const usearray =
                filteredCountries?.length > 0 ? filteredCountries : countries;
            const filtered = usearray.filter((item: CountriesItem) =>
                item?.name?.common.toLowerCase().includes(filterText.toLowerCase())
            );
            setFilteredCountries(filtered);
        } catch (err) {
            console.log(err);
        }
    }, [debounceQuery, filteredCountries, filterText, countries]);

    useEffect(() => {
        try {
            const usearray = countries;
            const filteredByRegion = usearray.filter((item: CountriesItem) =>
                item.region.toLowerCase().includes(regionText.toLowerCase())
            );
            setFilteredCountries(filteredByRegion);
        } catch (err) { }
    }, [regionText, countries]);

    const onFlagCardClick = (countryName: MouseEvent<HTMLButtonElement>) => {
        navigate(`/detail/${countryName}`)
    }

    if (isError) return <div>error fetching countries</div>
    return (
        <>
            <Grid
                container
                direction="row"
                alignItems="space-between"
                justifyContent="space-between"
                spacing={2}
                sx={{
                    marginBottom: "3rem",
                }}
                id="back-to-top-anchor"
            >
                <Grid item desktop={4} mobile={12}>
                    <Filter value={filterText} onChange={onChangeFilterText} />
                </Grid>
                <Grid
                    item
                    desktop={3}
                    mobile={7}
                    alignItems="flex-end"
                    justifyContent="flex-end"
                >
                    <Select
                        value={regionText}
                        items={REGIONS}
                        placeholder="filter by region"
                        onChange={onChangeRegion}
                    />
                </Grid>
            </Grid>
            <Grid container direction="row" spacing={7}>
                {filteredCountries?.length > 0
                    ? filteredCountries.map((country: any, id: number) => (
                        <Grid key={id} item mobile={12} desktop={3}>
                            <FlagCard
                                country={country}
                                onClick={() => onFlagCardClick(country.name.common)} />
                        </Grid>
                    ))
                    : null}
            </Grid>
            <ScrollTop>
                <Fab size="small" aria-label="scroll back to top">
                    <FontAwesomeIcon icon={faArrowUp} />
                </Fab>
            </ScrollTop>
        </>
    );
};

export default Main;
