import { ProductService } from "./product.js";

const createEventCard = (product) => {
  // Create the event card div
  const eventCard = document.createElement("div");
  eventCard.className =
    "bg-white border border-gray rounded-lg overflow-hidden shadow-md rounded-[10px] flex flex-col justify-between";

  // Create the image element
  const eventImage = document.createElement("img");
  eventImage.src = product.image;
  eventImage.alt = product.title;
  eventImage.className = "w-full h-[240px] object-contain shadow-md";
  // eventImage.style.backgroundColor = "#f0f0f0";

  // Create the event details div
  const eventDetails = document.createElement("div");
  eventDetails.className = "px-4 py-6 flex flex-col flex-grow";

  // Create the event title
  const eventTitle = document.createElement("h3");
  eventTitle.textContent = product.title;
  eventTitle.className = "text-base font-gilroySemiBold text-black mb-2";

  // Create the event price
  const eventPrice = document.createElement("p");
  eventPrice.textContent = `$${product.price}`;
  eventPrice.className = "mb-4 text-black text-sm font-gilroyMedium";

  // Create the event description
  const eventDescription = document.createElement("p");
  eventDescription.textContent = product.description;
  eventDescription.className = "mb-4 text-black text-sm";

  // Create the view details link
  const viewDetailsLink = document.createElement("a");
  viewDetailsLink.href = "/src/index.html?productId=" + product.id;
  viewDetailsLink.className =
    "text-primary text-sm font-gilroySemiBold mt-auto view-details-link flex items-center gap-1";
  viewDetailsLink.textContent = "View details";
  viewDetailsLink.dataset.productId = product.id;

  // Create the SVG element
  const svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgIcon.setAttribute("width", "16");
  svgIcon.setAttribute("height", "16");
  svgIcon.setAttribute("fill", "currentColor");
  svgIcon.setAttribute("class", "bi bi-arrow-up-right");
  svgIcon.setAttribute("viewBox", "0 0 16 16");

  const svgPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  svgPath.setAttribute("fill-rule", "evenodd");
  svgPath.setAttribute(
    "d",
    "M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
  );

  svgIcon.appendChild(svgPath);

  // Append the SVG icon to the view details link
  viewDetailsLink.appendChild(svgIcon);

  // Add an event listener to the view details link
  viewDetailsLink.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "/src/productDetails.html?productId=" + product.id;
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
