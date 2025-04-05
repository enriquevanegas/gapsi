import { createContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const CartContext = createContext();

export function CartProvider({ children }){
    const [cart, setCart] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const clearCart = () => {
        setCart([]);
        setSearchParams({})
    };

    const countCart = () => {
        return cart.length;
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, countCart }}>
            {children}
        </CartContext.Provider>
    )
}

