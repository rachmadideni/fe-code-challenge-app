import useSWR from "swr";
import fetcher from "../utils/fetcher";
import { COUNTRY_BY_NAME_URL } from "../constants";
const useCountryByName = (name: string | null | undefined) => {
    const { data, error } = useSWR((name !== "" || typeof name !== "undefined") ? COUNTRY_BY_NAME_URL + '/' + name : null, fetcher)
    return {
        country: data,
        isLoading: !error && !data,
        isError: error
    }
}

export default useCountryByName;