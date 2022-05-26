import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import axiosPrivate from "../API/axiosPrivate";
import auth from "../firebase.init";
import useError from "./useError";

const useMyOrder = () => {
    const handleError = useError();
    const [user] = useAuthState(auth);
    const { data: orders, isLoading, refetch } = useQuery('myOrder', async () => {
        try {
            return await axiosPrivate.get(`https://nasah-bicycle.herokuapp.com/myOrders?client=${user.email}`)
        }
        catch (error) {
            handleError(error);
        }
    })
    return { orders, isLoading, refetch };
}

export default useMyOrder;