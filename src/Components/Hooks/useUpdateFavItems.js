export const useUpdateFavItems = () => (favItems) => {
    localStorage.favItems = JSON.stringify(favItems);
    console.log(localStorage.favItems, "localstorage fav items");
  };
  
  