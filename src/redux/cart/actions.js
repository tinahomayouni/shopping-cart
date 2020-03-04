export const ADD = "ADD";
export const REMOVE = "REMOVE";

export function addToCart(product) {
  return {
    type: ADD,
    payload: product
  };
}
export function removeFromCart(productId) {
  return {
    type: REMOVE,
    payload: productId
  };
}
