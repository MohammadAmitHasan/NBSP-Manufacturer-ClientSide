import { signOut } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase.init";

const useError = () => {
    const handleError = error => {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
            signOut(auth);
            Navigate('/login')
            toast('Please, Login again')
        }
    }
    return handleError

}

export default useError;