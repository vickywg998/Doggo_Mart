
export const useUpdateCartItems = () => (cartItems) => {
  localStorage.cartItems = JSON.stringify(cartItems);
  console.log(localStorage.cartItems, "localstorage cart items");
};

