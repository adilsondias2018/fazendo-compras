import { useSelector } from "react-redux";

import Product from "../Product";
const Products = () => {
  //  buscando os dados no state dentro da store
  const products = useSelector((state) => state.products);
  console.log("products", products);

  return (
    <div>
      {products.map((product, index) => (
        <Product key={index} product={product}></Product>
      ))}
    </div>
  );
};

export default Products;
