const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "@cart/ADD":
      const { product } = action;
      return [...state, product];
    case "@cart/REMOVE":
      const newList = state.filter((product) => product.id !== action.id);
      return newList;
    case "@cart/ADDFOOD":
      const { food } = action;
      return [...state, food];
    case "@cart/REMOVEFOOD":
      const newListFood = state.filter((foods) => foods.id !== action.id);
      return newListFood;

    default:
      return state;
  }
};

export default cartReducer;
