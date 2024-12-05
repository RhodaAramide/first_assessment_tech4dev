import { ProductService } from "./product.js";

const displayProductDetails = (product) => {
  // Get the product details div
  const productDetailsDiv = document.getElementById("product-details");

  productDetailsDiv.innerHTML = `
        <div class="pb-2 font-gilroyRegular">          
          <img src=${product.image} alt=${product.title} class="w-full h-96 object-contain shadow-lg rounded-[10px]"/>
          
            <div class="flex flex-col md:flex-row md:justify-between gap-[20px] py-8">
              <div class="p-[20px] w-full md:w-[60%] lg:w-[70%]">
                <p class="font-gilroyBold text-md py-2">${product.title}</p>
                <div class="text-base flex flex-col gap-3 pt-2">
                  <div class="flex items-center gap-2 text-base">
                    <div class="flex gap-3">
                    <i class="bi bi-calendar text-secondary"></i> 
                    <p>Sunday, October 3rd, 2023</p>
                    <p><i class="bi bi-clock text-secondary"></i> <span> 6PM</span></p>
                    </div>
                  </div>
                  <div class="flex gap-2">
                    <i class="bi bi-geo-alt text-secondary"></i> <p>Race Course, 8/9 Marina, Onikan, Lagos Lagos, 4aa Force Rd, Lagos Island 102273, Lagos</p>
                  </div>
                  <div class="flex gap-2">
                    <i class="bi bi-person text-secondary"></i><p>FK, Jollz</p>
                  </div>
                </div>
                <div class="pt-3">                
                  <h2 class="font-gilroyBold text-base py-6">Event description</h2>
                  </p class="text-base"> ${product.description}</p>
                </div>
                <div class="pt-6">
                <p class="font-gilroyBold text-base">Product Pricing</p>
                <div class="text-secondary text-base font-gilroyBold pt-2">
                  $${product.price}
                </div>
                <button class="bg-secondary text-base px-6 py-3 rounded-[10px] text-white font-gilroySemiBold hover:bg-primary transition-all mt-8">Buy Now</button>
                </div>
              </div>
              <div class="w-full md:w-[40%] lg:w-[30%] md:pt-14 md:px-0 px-4">
                <div class="flex flex-col">
                  <p class="text-base font-gilroyBold py-3">Contact Organizers</p>
                  <div class="flex gap-6">
                    <div class="bg-secondary p-1 rounded-2xl text-white">
                      <i class="bi bi-envelope-fill"></i>
                    </div>
                    <div class="bg-secondary p-1 rounded-lg text-white">
                      <i class="bi bi-twitter"></i>
                    </div>
                    <div class="bg-secondary p-1 rounded-lg text-white">
                      <i class="bi bi-instagram"></i>
                    </div>
                  </div>
                </div>
                <div class="pt-6 w-full h-full max-h-[500px] text-left sm:min-h-[400px] md:min-h-[350px]">
                  <p class="text-base font-gilroyBold py-6">Directions</p>
                  <div class="relative w-full h-[80%] mt-2 md:px-0 px-4">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.615574213267!2d3.3988596743937305!3d6.443381993547897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8bd384cdf87b%3A0xc83383bffdab3596!2sMuson%20Centre!5e0!3m2!1sen!2sng!4v1733253941423!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="absolute top-0 left-0 w-full h-[100%]"></iframe>
                  </div>
                </div>
              </div>
            </div>            
        </div>
        `;
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
