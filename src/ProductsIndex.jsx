export function ProductsIndex(props) {
  return (
    <div id="products-index">
      <h1>All Products</h1>
      {props.myProducts.map((product) => (
        <div key={product.id} className="recipes">
          <h2>{product.name}</h2>
          <img src={product.images[0].url} alt="a product" />
          <h3>Price: {product.price}</h3>
          <p>Description: {product.description}</p>
        </div>
      ))}
    </div>
  );
}
