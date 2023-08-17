export function ProductsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateProduct(params, () => event.target.reset());
  };

  return (
    <div id="product-new">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name:
          <input name="name" type="text" />
        </div>
        <div>
          Price:
          <input type="number" name="price" />
        </div>
        <div>
          Description:
          <input type="text" name="description" />
        </div>
        <div>
          Supplier ID:
          <input type="number" name="supplier_id" />
        </div>
        <div>
          Image URL:
          <input type="text" name="image_url" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
