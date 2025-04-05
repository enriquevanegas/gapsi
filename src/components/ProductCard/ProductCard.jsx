
export function ProductCard({ product, onAddToCart }) {
  const { image, name, price } = { ...product };
  const nullProduct = !image && !name && !price;

  return (
    !nullProduct ? (
      <div className="col-12 col-md-6 col-lg-4 gy-3">
        <div className="product-card card p-3" style={{ height: '100%' }}>

          <img src={image} alt={name} />

          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">${price}</p>
            <button className="btn btn-primary" onClick={() => onAddToCart(product)}>Agregar al carrito</button>
          </div>
        </div>
      </div>
    ) : null
  )
}

