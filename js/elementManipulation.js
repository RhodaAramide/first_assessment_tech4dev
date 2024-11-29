import { ProductService } from "./product.js";

const createEventCard = (product) => {
  // Create the event card div
  const eventCard = document.createElement("div");
  eventCard.className = "event-card";

  // Create the image element
  const eventImage = document.createElement("img");
  eventImage.src = product.image;
  eventImage.alt = product.title;
  eventImage.className = "event-image";

  // Create the event details div
  const eventDetails = document.createElement("div");
  eventDetails.className = "event-details";

  // Create the event title
  const eventTitle = document.createElement("h3");
  eventTitle.textContent = product.title;

  // Create the event price
  const eventPrice = document.createElement("p");
  eventPrice.textContent = `$${product.price}`;

  // Create the event description
  const eventDescription = document.createElement("p");
  eventDescription.textContent = product.description;

  // Create the view details link
  const viewDetailsLink = document.createElement("a");
  viewDetailsLink.href = "/index.html?productId=" + product.id;
  viewDetailsLink.className = "view-details";
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
