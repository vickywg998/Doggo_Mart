export const useFavItems = () => {
  const storedFavItems = localStorage.favItems;
  if (storedFavItems) {
    try {
      const parsed = JSON.parse(storedFavItems);
      if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].id) {
        return parsed;
      }
    } catch (error) {}
  }
  return [];
};
