// Ouvindo
import { useSelector } from "react-redux";
import Food from "../Food";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log("Em cartd", cart);

  const stateCart = () => {
    if (cart.length === 0) {
      return "Não há itens no carrinho";
    }
  };

  const statusHealthCart = () => {
    // faltou tmepo para essa lógica
  };

  return (
    <div className="Layout">
      <label>A saude do seu carrinho</label> <label>{statusHealthCart()}</label>
      <h4>Carrinho Compras</h4>
      <label>O carrino esta:</label> <label>{stateCart()}</label>
      <div>
        {cart.map((food, index) => {
          return <Food key={index} food={food} isRemovable></Food>;
        })}
      </div>
      <label>Total Produtos:</label>
      <label>{cart.length}</label>
    </div>
  );
};

export default Cart;
