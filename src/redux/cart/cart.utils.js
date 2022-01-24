export const addItemToCart = (items, add) => {
  const existing = items.find(i => i.id === add.id);

  if (existing) {
    return items.map(i => 
      i.id === add.id ?
      {...i, quantity: i.quantity + 1}
      : i
      )
  }

  return ([...items, {...add, quantity: 1}]);
}