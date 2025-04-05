import {v4 as uuid} from 'uuid'
import { ProductCard } from "../ProductCard/ProductCard";

export function ProductList({ products, onAddToCart }) {

    return (
        <div className="product-list row">
            {
                products.map(product => (
                    <ProductCard key={uuid()} product={product} onAddToCart={onAddToCart} />
                ))
            }
        </div>
    )
}
