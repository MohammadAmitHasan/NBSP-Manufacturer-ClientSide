import { useQuery } from "react-query";
import axiosPrivate from "../API/axiosPrivate";
import useError from "./useError";

const useAllOrders = () => {
    const handleError = useError();
    const { data: orders, isLoading, refetch } = useQuery('allOrders', async () => {
        try {
            return await axiosPrivate.get(`http://localhost:5000/allOrders`)
        }
        catch (error) {
            handleError(error);
        }
    })
    return { orders, isLoading, refetch };
}

export default useAllOrders;