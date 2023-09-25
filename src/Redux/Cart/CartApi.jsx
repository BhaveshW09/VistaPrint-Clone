export const addToCart = (item) => {
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8000/cart`, {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
};

// Fetch All Item in Cart
export const fetchCart = () => {
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8000/cart`);
    const data = await response.json();
    resolve({ data });
  });
};

// Qunatity Update
export const quantityUpdate = (update) => {
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8000/cart/` + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
};

// Remove Item
export const removeItem = (itemId) => {
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8000/cart/` + itemId, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    resolve({ data: { id: itemId } });
  });
};
