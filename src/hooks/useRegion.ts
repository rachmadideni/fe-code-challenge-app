import useSWR from "swr";
import fetcher from "../utils/fetcher";
import { REGION_URL } from "../constants";

const useRegion = (region: string) => {
    const { data, error } = useSWR(`${REGION_URL}/${region}`, fetcher)
    return {
        regions: data,
        isLoading: !error && !data,
        isError: error
    }
}

export default useRegion; 