export const addToCart = (product) => ({
  type: "@cart/ADD",
  product,
});

export const removeFromCart = (id) => ({
  type: "@cart/REMOVE",
  id,
});

export const addFoodToCart = (food) => ({
  type: "@cart/ADDFOOD",
  food,
});

export const removeFoodCart = (id) => ({
  type: "@cart/REMOVEFOOD",
  id,
});
