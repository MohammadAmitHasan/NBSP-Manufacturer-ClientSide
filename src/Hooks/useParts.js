import { useQuery } from "react-query";

const useParts = (size) => {

    const { data: parts, isLoading, refetch } = useQuery('parts', () =>
        fetch(`https://nasah-bicycle.herokuapp.com/parts?size=${size}`)
            .then(res => res.json()))

    return { parts, isLoading, refetch }
}
export default useParts;