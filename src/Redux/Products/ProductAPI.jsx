export const fetchAllProducts = () => {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "https://e-commerce-data-0ia9.onrender.com/products"
    );
    const data = await response.json();
    resolve({ data });
  });
};

export const fetchPopularProducts = () => {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "https://e-commerce-data-0ia9.onrender.com/products"
    );
    const data = await response.json();
    resolve({ data });
  });
};

export const fetchTrendingProducts = () => {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "https://e-commerce-data-0ia9.onrender.com/products"
    );
    const data = await response.json();
    resolve({ data });
  });
};

export const fetchBrandedProducts = (id) => {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "https://e-commerce-data-0ia9.onrender.com/products"
    );
    const data = await response.json();
    resolve({ data });
  });
};

export const fetchProductsByID = (id) => {
  return new Promise(async (resolve) => {
    const response = await fetch(
      `https://e-commerce-data-0ia9.onrender.com/products/` + id
    );
    const data = await response.json();
    resolve({ data });
  });
};
