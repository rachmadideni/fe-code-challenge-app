import { InputAdornment } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { StyledTextField } from "./index.styled";
import { IFilter } from "./types"

const Filter = ({ value, onChange }: IFilter) => {
    return (
        <StyledTextField
            variant="outlined"
            placeholder="search for a country"
            fullWidth
            value={value}
            InputProps={{
                startAdornment: (
                    <InputAdornment
                        position="start"
                        sx={{
                            fontSize: 18,
                        }}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </InputAdornment>
                ),
            }}
            onChange={onChange}
        />
    );
};

export default Filter;
