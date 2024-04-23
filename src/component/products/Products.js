import ProductDetail from "../product_detail/Product_detail";

const Products = () => {
  return (
    <div className="products">
      <h1>Danh sách hàng hóa</h1>
      <div>
        <ProductDetail />
        <ProductDetail />
        <ProductDetail />
        <ProductDetail />
      </div>
    </div>
  );
};

export default Products;
