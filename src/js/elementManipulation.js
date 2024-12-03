import { ProductService } from "./product.js";

const createEventCard = (product) => {
  // Create the event card div
  const eventCard = document.createElement("div");
  eventCard.className =
    "bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md rounded-[10px] flex flex-col justify-between";

  // Create the image element
  const eventImage = document.createElement("img");
  eventImage.src = product.image;
  eventImage.alt = product.title;
  eventImage.className = "w-full h-[240px] object-contain";
  eventImage.style.backgroundColor = "#f0f0f0";

  // Create the event details div
  const eventDetails = document.createElement("div");
  eventDetails.className = "p-6 flex flex-col flex-grow";

  // Create the event title
  const eventTitle = document.createElement("h3");
  eventTitle.textContent = product.title;
  eventTitle.className =
    "text-[16px] leading-[18.75px] font-semibold text-black mb-2";

  // Create the event price
  const eventPrice = document.createElement("p");
  eventPrice.textContent = `$${product.price}`;
  eventPrice.className =
    "mb-4 text-black text-[14px] leading-[16.41px] font-medium";

  // Create the event description
  const eventDescription = document.createElement("p");
  eventDescription.textContent = product.description;
  eventDescription.className = "mb-4 text-black text-[14px] leading-[16.41px]";

  // Create the view details link
  const viewDetailsLink = document.createElement("a");
  viewDetailsLink.href = "/index.html?productId=" + product.id;
  viewDetailsLink.className =
    "text-[#432361] text-[14px] leading-[16.41px] mt-auto";
  viewDetailsLink.textContent = "View details";
  viewDetailsLink.dataset.productId = product.id;
  // Add an event listener to the view details link
  viewDetailsLink.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "/productDetails.html?productId=" + product.id;
  });

  // Append elements to the event details div
  eventDetails.appendChild(eventTitle);
  eventDetails.appendChild(eventPrice);
  eventDetails.appendChild(eventDescription);
  eventDetails.appendChild(viewDetailsLink);

  // Append elements to the event card div
  eventCard.appendChild(eventImage);
  eventCard.appendChild(eventDetails);

  // Append the event card to the main container
  const eventsGrid = document.getElementById("events-grid");
  eventsGrid.appendChild(eventCard);
};

const productService = new ProductService();

// Display the products
const displayProducts = (products) => {
  products.forEach((product) => {
    createEventCard(product);
  });
};

productService.getProducts().then(displayProducts);
