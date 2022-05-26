import { useEffect, useState } from "react";

const useParts = (size) => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch(`https://nasah-bicycle.herokuapp.com/parts?size=${size}`)
            .then(res => res.json())
            .then(data => setParts(data))
    }, [size])
    return parts
}
export default useParts;