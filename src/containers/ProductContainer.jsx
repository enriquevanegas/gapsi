import { useState, useRef, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ProductList } from '../components/ProductList/ProductList'
import { useFetchProducts } from "../hooks/useFetchProducts";
import { useSearchParams } from "react-router-dom";

export function ProductContainer() {
    const [page, setPage] = useState(1);
    const loaderRef = useRef(null);
    const { cart, addToCart } = useContext(CartContext);
    const [productsLoaded, setProductsLoaded] = useState(false);

    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    const products = useFetchProducts({query: query, page: page, newSearch: !!query});

    // Filtrar productos ya agregados al carrito
    const filteredProducts = products.filter(p => !cart.some(c => c.id === p.id));

    useEffect(() => {
        if(products.length) setProductsLoaded(true);
    })

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setPage(prev => prev + 1);
                }
            },
            { threshold: 1 }
        );

        if (loaderRef.current) observer.observe(loaderRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="container">
            {
                productsLoaded ? (
                    <>
                        <ProductList products={filteredProducts} onAddToCart={addToCart} />
                        <div ref={loaderRef}>Cargando más productos...</div>
                    </>
                ) : (
                    <div className="loader-container d-flex">
                        <span className="loader m-auto"></span>
                    </div>
                )
            }
        </div>
    )
}


