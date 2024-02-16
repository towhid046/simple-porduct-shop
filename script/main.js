// utility functions:
function getInnerValueById(elementId) {
  return parseFloat(document.getElementById(elementId).innerText);
}

function getInnerTextById(elementId) {
  return document.getElementById(elementId).innerText;
}
function setInnerValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value.toFixed(2);
}

// ----------------------------------------
const allCards = document.querySelectorAll(".card");
for (let card of allCards) {
  card.addEventListener("click", function () {
    cardOperationMaker(card);
  });
}

function cardOperationMaker(card) {

  // get the product title and disply it:
  const productTitle = card.parentElement.children[1].innerText;
  addItem(productTitle);

  // get targeted product price:
  const productPrice = parseFloat(card.parentElement.children[2].children[0].innerText);

  // get current total price:
  let currentTotalPrice = getInnerValueById("total-price");
  currentTotalPrice += productPrice;

  // set total price:
  setInnerValueById("total-price", currentTotalPrice);

  // set total
  setInnerValueById("total", currentTotalPrice);

  // get current inner text of add to cart button:
  card.style.color = "white";
  card.innerText = "Remove from Cart";
}

function addItem(productTitle) {
  const li = document.createElement("li");
  li.innerText = productTitle;
  const ul = document.getElementById("items");
  ul.appendChild(li);
  setTimeout(()=>{
    alert('Added to the Cart list')
  }, 200)
}


// apply button event handelar function:
function applyButtonClickHandelar() {
  // get input fild value"
  const inputElement = document.getElementById("discount-input-fild");
  const inputValue = inputElement.value;

  //  get total current price
  const currentTotalPrice = getInnerValueById("total-price");

  if (inputValue === "SALE200" && currentTotalPrice > 200) {
    // calculate discount price:
    const discount = (currentTotalPrice * 20) / 100;

    // set discount price
    setInnerValueById("discount-price", discount);

    // set total after discount:
    setInnerValueById("total", currentTotalPrice - discount);

    // user get an alert after getting discount:
    setTimeout(() => {
      alert(`Congratulation! you have save ${discount.toFixed(2)}$!!`);
    }, 200);
  } else {
    alert("Invalid Copun");
  }

  // clear the copun input fild:
  inputElement.value = "";
}

// add event listener to apply discount button:
const applyDiscountBtn = document.getElementById("apply-discount-btn");
applyDiscountBtn.addEventListener("click", applyButtonClickHandelar);
