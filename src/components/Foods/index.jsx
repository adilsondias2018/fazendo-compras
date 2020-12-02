import { useSelector } from "react-redux";
import Food from "../Food";
const Foods = () => {
  const foods = useSelector((state) => state.foods);

  return (
    <div>
      {foods.map((food, index) => (
        <Food key={index} food={food}></Food>
      ))}
    </div>
  );
};

export default Foods;
