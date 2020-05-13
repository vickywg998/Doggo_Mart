
// const fakedata = [
//   {
//     id: 3,
//     sku: 876661122392077,
//     title: "Ernie",
//     description: "White DGK Script",
//     price: 14.9,
//     count: 1,
//   },
//   {
//     id: 5,
//     sku: 10547961582846888,
//     title: "Cheerio",
//     description: "Tso 3D Short Sleeve",
//     price: 10.9,
//     count: 1,
//   },
//   {
//     id: 1,
//     sku: 584029384930293,
//     title: "Millie",
//     description: "Sphynx Tie Dye Grey",
//     price: 10,
//     count: 1,
//   },
// ];

export const useCartItems = () => {
  //   return fakedata;

  const storedCartItems = localStorage.cartItems;
  if (storedCartItems) {
    try {
      const parsed = JSON.parse(storedCartItems);
      if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].id) {
        //   setCartItems(parsed); // can't do it here, does not make sense
        return parsed;
      }
    } catch (error) {}
  }
  return []; // if empty then return nothing 
};


