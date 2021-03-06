import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        const email = user.email;
        if (email) {
            fetch(`https://nasah-bicycle.herokuapp.com/user/admin/${email}`, {
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data)
                    setAdminLoading(false)
                })
        }
    }, [user])
    return [admin, adminLoading]
}

export default useAdmin;