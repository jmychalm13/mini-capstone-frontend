export function ProductsShow(props) {
  return (
    <div>
      <h1>{props.product.name}</h1>
      <p>Description: {props.product.description}</p>
      <p>Price: {props.product.price}</p>
      {props.product.images.map((image) => (
        <img key={image.id} src={image.url} alt="" />
      ))}
    </div>
  );
}
