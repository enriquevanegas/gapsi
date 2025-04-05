import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export function ResetButton() {
    const { clearCart } = useContext(CartContext);

    return (
        <button className="btn" onClick={clearCart}>
            <i className="fa-solid fa-rotate"></i>
        </button>
    )
}
