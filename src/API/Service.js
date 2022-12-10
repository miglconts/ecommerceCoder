import products from "./products";

export function getProducts() {
  return new Promise((resolve, reject) => {
    products ? resolve(products) : reject("No encontrado");
  });
}

export function getProductCategory(categoryID) {
  return new Promise((resolve, reject) => {
    const filterProducts = products.filter((item) => {
      return item.category === categoryID;
    });
    filterProducts ? resolve(filterProducts) : reject("No encontrado");
  });
}
export function getProduct(productID) {
  return new Promise((resolve, reject) => {
    const findProduct = products.find((item) => {
      return item.id === parseInt(productID);
    });
    findProduct ? resolve(findProduct) : reject("No encontrado");
  });
}
