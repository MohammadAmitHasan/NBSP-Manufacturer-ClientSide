import { useState } from "react"

const useCancelOrder = () => {
    const [cancelOrder, setCancelOrder] = useState(null);
    return [cancelOrder, setCancelOrder]
}

export default useCancelOrder;