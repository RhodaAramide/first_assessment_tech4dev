import { ProductService } from "./product.js";

const displayProductDetails = (product) => {
  // Get the product details div
  const productDetailsDiv = document.getElementById("product-details");
  // Create the product image
  const productImage = document.createElement("img");

  productImage.src = product.image;
  productImage.alt = product.title;
  productImage.className = "product-image";

  // Create the product title
  const productTitle = document.createElement("h1");
  productTitle.textContent = product?.title;

  // Create the product price
  const productPrice = document.createElement("p");
  productPrice.textContent = `Price: $${product.price}`;

  // Create the product description
  const productDescription = document.createElement("p");
  productDescription.textContent = product.description;

  // Append elements to the product details div
  productDetailsDiv.appendChild(productImage);
  productDetailsDiv.appendChild(productTitle);
  productDetailsDiv.appendChild(productPrice);
  productDetailsDiv.appendChild(productDescription);
};

const productService = new ProductService();

// Get the product id from the query string
const getProductIdFromQuery = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("productId");
};

// Get the product details and display them
const productId = getProductIdFromQuery();
productService.getProductById(productId).then(displayProductDetails);
