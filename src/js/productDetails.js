import { ProductService } from "./product.js";

const displayProductDetails = (product) => {
  // Get the product details div
  const productDetailsDiv = document.getElementById("product-details");
  // Create the product image
  const productImage = document.createElement("img");

  productImage.src = product.image;
  productImage.alt = product.title;
  productImage.className = "w-full h-[480px] object-contain rounded-[10px]";
  productImage.style.backgroundColor = "#f0f0f0";

  // Create the product title
  const productTitle = document.createElement("h1");
  productTitle.textContent = product?.title;
  productTitle.className = "text-md font-gilroyBold text-black mt-8";

  // Create the product price
  const productPrice = document.createElement("p");
  productPrice.textContent = `Price: $${product.price}`;
  productPrice.className = "text-base font-gilroyBold text-accent";

  // Create the product description title
  const productDescriptionTitle = document.createElement("h2");
  productDescriptionTitle.textContent = "Product description";
  productDescriptionTitle.className =
    "text-base font-gilroyBold text-black pt-4";

  // Create the product description
  const productDescription = document.createElement("p");
  productDescription.textContent = product.description;
  productDescription.className = "text-base text-black pt-4";

  //Create the button
  const button = document.createElement("button");
  button.textContent = "Buy now";
  button.className =
    "bg-secondary text-white font-gilroySemiBold text-base py-3 px-6 rounded-[10px] mt-8";

  // Append elements to the product details div
  productDetailsDiv.appendChild(productImage);
  productDetailsDiv.appendChild(productTitle);
  productDetailsDiv.appendChild(productPrice);
  productDetailsDiv.appendChild(productDescriptionTitle);
  productDetailsDiv.appendChild(productDescription);
  productDetailsDiv.appendChild(button);
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

// productService
//   .getProductById(productId)
//   .then((product) => console.log(product));
