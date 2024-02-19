const bicycles = [
  {
    id: 1,
    image:
      "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/FX1-24-40813-A-Primary",
    title: "Mountain Bike",
    price: 599.99,
  },
  {
    id: 2,
    image:
      "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/FXSport4Carbon-24-40822-B-Primary",
    title: "Road Bike",
    price: 699.99,
  },
  {
    id: 3,
    image:
      "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/EmondaSL5-24-41366-B-Primary",
    title: "Hybrid Bike",
    price: 499.99,
  },
  {
    id: 4,
    image:
      "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/FuelEX5-24-41346-A-Primary",
    title: "BMX Bike",
    price: 399.99,
  },
  {
    id: 5,
    image:
      "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/Marlin5-24-40773-A-Primary",
    title: "Cruiser Bike",
    price: 449.99,
  },
  {
    id: 6,
    image:
      "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/MadoneSLR7_23_37025_A_Primary",
    title: "Electric Bike",
    price: 1299.99,
  },
  {
    id: 7,
    image:
      "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/DomaneAL4-24-41607-B-Primary",
    title: "Folding Bike",
    price: 349.99,
  },
  {
    id: 8,
    image:
      "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/MadoneSLR7eTap_23_37418_C_Primary",
    title: "Fixed Gear Bike",
    price: 499.99,
  },
  {
    id: 9,
    image:
      "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/EmondaSL6_23_36958_B_Primary",
    title: "Commuter Bike",
    price: 899.99,
  },
];

const furnitures = [
  {
    id: 1,
    image: "https://m.media-amazon.com/images/I/81o5a1fF0jL._AC_UL320_.jpg",
    title: "Modern Sofa",
    price: 799.99,
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/61lBRgscqwL._AC_UL320_.jpg",
    title: "Coffee Table",
    price: 149.99,
  },
  {
    id: 3,
    image: "https://m.media-amazon.com/images/I/81KvPOthGwL._AC_UL320_.jpg",
    title: "Dining Chair Set",
    price: 299.99,
  },
  {
    id: 4,
    image: "https://m.media-amazon.com/images/I/71pjE8Tvr-L._AC_UL320_.jpg",
    title: "Bookshelf",
    price: 199.99,
  },
  {
    id: 5,
    image: "https://m.media-amazon.com/images/I/618dcbJi1VL._AC_UL320_.jpg",
    title: "TV Stand",
    price: 249.99,
  },
  {
    id: 6,
    image: "https://m.media-amazon.com/images/I/61wdXEjQbXL._AC_UL320_.jpg",
    title: "Bed Frame",
    price: 499.99,
  },
  {
    id: 7,
    image: "https://m.media-amazon.com/images/I/71HTpJpD3tL._AC_UL320_.jpg",
    title: "Wardrobe",
    price: 599.99,
  },
  {
    id: 8,
    image: "https://m.media-amazon.com/images/I/71Sx8jN8pPL._AC_UL320_.jpg",
    title: "Dresser",
    price: 399.99,
  },
  {
    id: 9,
    image: "https://m.media-amazon.com/images/I/71HTpJpD3tL._AC_UL320_.jpg",
    title: "Deak Venture",
    price: 599.99,
  },
];

// bicycle cards
const cardsContainer = document.getElementById("cards");
bicycles.map((product) => {
  cardsContainer.innerHTML += `
      <div class="card bg-base-100 shadow-xl">
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
        <p>$ ${product.price}</p>
        <button class='add-button btn btn-error rounded-lg w-full'>Add to Cart</button>
      </div>
    </div>   
  `;
});

// furniture cards
const cardsContainer2 = document.getElementById("cards2");
furnitures.map((product) => {
  cardsContainer2.innerHTML += `
      <div class="card bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img
          src=${product.image}
          alt="Furniture"
          class="rounded w-[80%]"
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
          <p>$ ${product.price}</p>
        <button class='add-button btn btn-error rounded-lg w-full'>Add to Cart</button>
      </div>
    </div>   
  `;
});
