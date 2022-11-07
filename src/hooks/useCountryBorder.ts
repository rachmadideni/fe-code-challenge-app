import useSWR from "swr";
import fetcher from "../utils/fetcher";
import { COUNTRY_BY_BORDER_URL } from "../constants";

const useCountryBorder = (borderCountryCode: string | null | undefined) => {
    const { data, error } = useSWR((borderCountryCode !== "" || typeof borderCountryCode !== "undefined") ? COUNTRY_BY_BORDER_URL + '/' + borderCountryCode : null, fetcher)
    return {
        countryBorder: data,
        isLoading: !error && !data,
        isError: error
    }
}

export default useCountryBorder;