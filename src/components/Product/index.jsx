const Product = ({ product }) => {
  console.log(product);
  console.log(product.name);
  return (
    <div>
      <div>{product.name}</div>
      <div>{product.price}</div>
      <div>{product.id}</div>
    </div>
  );
};

export default Product;
