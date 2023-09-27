export const fetchFilterCategory = () => {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "https://e-commerce-data-0ia9.onrender.com/products"
    );
    const data = await response.json();
    resolve({ data });
  });
};

// SmartPhones
export const fetchSmartPhones = () => {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "https://e-commerce-data-0ia9.onrender.com/products"
    );
    const data = await response.json();
    resolve({ data });
  });
};

// Fragrances
export const fetchFragrances = () => {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "https://e-commerce-data-0ia9.onrender.com/products"
    );
    const data = await response.json();
    resolve({ data });
  });
};

// Laptops
export const fetchLaptops = () => {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "https://e-commerce-data-0ia9.onrender.com/products"
    );
    const data = await response.json();
    resolve({ data });
  });
};

// Skincare
export const fetchSkincare = () => {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "https://e-commerce-data-0ia9.onrender.com/products"
    );
    const data = await response.json();
    resolve({ data });
  });
};
