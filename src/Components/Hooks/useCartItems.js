
export const useCartItems = () => {

  const storedCartItems = localStorage.cartItems;
  if (storedCartItems) {
    try {
      const parsed = JSON.parse(storedCartItems);
      if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].id) {
        return parsed;
      }
    } catch (error) {}
  }
  return []; 
};


