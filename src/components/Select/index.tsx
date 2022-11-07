import { MenuItem } from "@mui/material";
import { StyledTextField } from "./index.styled";
import { ISelect } from "./types"

const Select = ({
    value,
    onChange,
    items = [],
    placeholder,
    ...otherProps
}: ISelect) => {
    return (
        <StyledTextField
            select
            value={value}
            onChange={onChange}
            fullWidth
            variant="outlined"
            {...otherProps}
        >
            <MenuItem value="" color="primary">{placeholder}</MenuItem>
            {items.length > 0
                ? items.map((item, id) => (
                    <MenuItem key={`item-${id}`} value={item}>
                        {item}
                    </MenuItem>
                ))
                : null}
        </StyledTextField>
    );
};

export default Select;
