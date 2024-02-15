const cards = [
    { id: 1, title: "A Accessories", price: 19.9 },
    { id: 2, title: "B Accessories", price: 29.1 },
    { id: 3, title: "C Accessories", price: 69.0 },
    { id: 4, title: "D Accessories", price: 40.0 },
    { id: 5, title: "E Accessories", price: 99.0 },
    { id: 6, title: "F Accessories", price: 9.50 },
  ];
  
  const cardsContainer = document.getElementById("cards");
  cards.map((card) => {
    cardsContainer.innerHTML += `
      <div class="card bg-base-100 shadow-xl cursor-pointer">
      <figure class="px-10 pt-10">
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
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
        <h2 class="card-title">${card.title}</h2>
        <p>$ <span id=${card.id}>${card.price}</span></p>
        <button class='btn btn-error w-full hover:text-white'>Add to Cart</button>
      </div>
    </div>   
  `;
  });
  