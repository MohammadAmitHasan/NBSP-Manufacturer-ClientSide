import { useQuery } from "react-query";
import Loading from '../Pages/Shared/Loading'

const useParts = () => {
    const { data: parts, isLoading } = useQuery('parts', () =>
        fetch(`http://localhost:5000/parts`)
            .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (parts)
}
export default useParts;