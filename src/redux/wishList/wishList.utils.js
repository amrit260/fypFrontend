export const addItemToWishList = (prevWishItems, newItem) => {
  const existingWishItem = prevWishItems.find((item) => item.id === newItem.id);

  if (existingWishItem) {
    return prevWishItems;
  } else {
    return [...prevWishItems, newItem];
  }
};
