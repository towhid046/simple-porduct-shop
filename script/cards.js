const products = [
  {
    id: 1,
    image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/FX1-24-40813-A-Primary",
    title: "Mountain Bike",
    price: 599.99
  },
  {
    id: 2,
    image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/FXSport4Carbon-24-40822-B-Primary",
    title: "Road Bike",
    price: 699.99
  },
  {
    id: 3,
    image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/EmondaSL5-24-41366-B-Primary",
    title: "Hybrid Bike",
    price: 499.99
  },
  {
    id: 4,
    image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/FuelEX5-24-41346-A-Primary",
    title: "BMX Bike",
    price: 399.99
  },
  {
    id: 5,
    image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/Marlin5-24-40773-A-Primary",
    title: "Cruiser Bike",
    price: 449.99
  },
  {
    id: 6,
    image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/MadoneSLR7_23_37025_A_Primary",
    title: "Electric Bike",
    price: 1299.99
  },
  {
    id: 7,
    image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/DomaneAL4-24-41607-B-Primary",
    title: "Folding Bike",
    price: 349.99
  },
  {
    id: 8,
    image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/MadoneSLR7eTap_23_37418_C_Primary",
    title: "Fixed Gear Bike",
    price: 499.99
  },
  {
    id: 9,
    image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/EmondaSL6_23_36958_B_Primary",
    title: "Commuter Bike",
    price: 799.99
  }
];

  
  const cardsContainer = document.getElementById("cards");
  products.map((product) => {
    cardsContainer.innerHTML += `
      <div class="bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img
          src=${product.image}
          alt="Bicycle"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
          <div class="rating">
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            </div>
        <h2 class="card-title">${product.title}</h2>
        <p>$ <span id=${product.id}>${product.price}</span></p>
        <button class='card btn btn-error w-full hover:text-white'>Add to Cart</button>
      </div>
    </div>   
  `;
  });
  