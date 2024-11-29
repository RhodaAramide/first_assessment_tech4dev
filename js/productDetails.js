import { ProductService } from "./product.js";

const displayProductDetails = (product) => {
  const productDetailsDiv = document.getElementById("product-details");

  const productImage = document.createElement("img");
  console.log(product?.image);
  productImage.src = product?.image;
  productImage.alt = product?.title;
  productImage.className = "product-image";

  const productTitle = document.createElement("h1");
  productTitle.textContent = product?.title;

  const productPrice = document.createElement("p");
  productPrice.textContent = `Price: $${product?.price}`;

  const productDescription = document.createElement("p");
  productDescription.textContent = product?.description;

  productDetailsDiv.appendChild(productImage);
  productDetailsDiv.appendChild(productTitle);
  productDetailsDiv.appendChild(productPrice);
  productDetailsDiv.appendChild(productDescription);
};

const productService = new ProductService();

const getProductIdFromQuery = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("productId");
};
const productId = getProductIdFromQuery();
productService.getProductById(productId).then(displayProductDetails);
