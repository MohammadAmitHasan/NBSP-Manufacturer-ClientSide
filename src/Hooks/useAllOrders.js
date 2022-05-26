import { useQuery } from "react-query";
import axiosPrivate from "../API/axiosPrivate";
import useError from "./useError";

const useAllOrders = () => {
    const handleError = useError();
    const { data: orders, isLoading, refetch } = useQuery('allOrders', async () => {
        try {
            return await axiosPrivate.get(`https://nasah-bicycle.herokuapp.com/allOrders`)
        }
        catch (error) {
            handleError(error);
        }
    })
    return { orders, isLoading, refetch };
}

export default useAllOrders;