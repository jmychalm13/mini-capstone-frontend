export function ProductsNew() {
  return (
    <div id="product-new">
      <h1>Add Product</h1>
      <form>
        <div>
          Name:
          <input type="text" />
        </div>
        <div>
          Price:
          <input type="number" />
        </div>
        <div>
          Description:
          <input type="text" />
        </div>
        <div>
          Image URL:
          <input type="text" />
        </div>
      </form>
    </div>
  );
}
