import useSWR from "swr";
import fetcher from "../utils/fetcher";
import { COUNTRIES_URL } from "../constants";

const useCountries = () => {
    const { data, error } = useSWR(COUNTRIES_URL, fetcher)
    return {
        countries: data,
        isLoading: !error && !data,
        isError: error
    }
}

export default useCountries; 