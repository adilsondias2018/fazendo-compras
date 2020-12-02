import { useDispatch } from "react-redux";
import { addFoodToCart } from "../../store/modules/cart/actions";
import { removeFoodCart } from "../../store/modules/cart/actions";

const Food = ({ food, isRemovable = false }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div>{food.name}</div>
      <div>{food.type}</div>
      {isRemovable ? (
        <button onClick={() => dispatch(removeFoodCart(food.id))}>
          Remover Produto
        </button>
      ) : (
        <button onClick={() => dispatch(addFoodToCart(food))}>
          Adiconar ao carrinho
        </button>
      )}
    </>
  );
};

export default Food;
