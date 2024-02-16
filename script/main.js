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

function setTextAndColorByElement(element, text, color) {
  element.style.color = color;
  element.innerText = text;
}

function getProductTitle(elementId) {
  const element = document.getElementById(elementId);
  console.log(element);
}

// ----------------------------------------

const allCards = document.querySelectorAll(".card");
for (let card of allCards) {

  // get targeted product title:
  // const productTitle = card.parentElement.children[1].innerText;

  // get all children of the card:
  const cardChildren = card.parentElement.children;

  // get targeted product title:
  let productTitle = "";
  let prices = undefined;
  for (let element of cardChildren) {
    if (element.tagName === "H2") {
      productTitle = element.innerText;
    } else if (element.tagName === "P") {
      prices = element.children;
    }
  }

  // get targeted product price:
  let productPrice = 0;
  for (let price of prices) {
    if (price.tagName === "SPAN") {
      productPrice = parseFloat(price.innerText);
    }
  }

  // get targeted product price
  // const productPrice = parseFloat(
  //   card.parentElement.children[2].children[0].innerText
  // );

  // added event listener to card button: mainly the card is the calss of card buttons;
  card.addEventListener("click", function () {
    card.innerText === "Add to Cart"
      ? addToCartClickHandelar(card, productTitle, productPrice)
      : removeToCartClickHandelar(card, productTitle, productPrice);
  });
}

function addToCartClickHandelar(card, productTitle, productPrice) {
  // Add an item to the porduct list:
  addItem(productTitle);

  // get current total price:
  let currentTotalPrice = getInnerValueById("total-price");
  currentTotalPrice += productPrice;

  // set total price:
  setInnerValueById("total-price", currentTotalPrice);

  // set total
  setInnerValueById("total", currentTotalPrice);

  // set text and color:
  setTextAndColorByElement(card, "Remove from Cart", "white");
}

function addItem(productTitle) {
  const li = document.createElement("li");
  li.innerText = productTitle;
  const ul = document.getElementById("items");
  ul.appendChild(li);

  // show an alert after adding an item to the cart
  setTimeout(() => {
    alert("Added to Cart");
  }, 200);
}

function removeToCartClickHandelar(card, productTitle, productPrice) {
  // get current total price:
  const currentTotalPrice = getInnerValueById("total-price") - productPrice;

  // set total price:
  setInnerValueById("total-price", currentTotalPrice);

  // set total:
  setInnerValueById("total", currentTotalPrice);

  // change button text and color:
  setTextAndColorByElement(card, "Add to Cart", "black");

  // Added hidden if the product title is match
  let allList = document.getElementById("items");
  allList = [allList.children];

  for (let i = 0; i < allList.length; i++) {
    const items = allList[i];
    for (let item of items) {
      if (productTitle === item.innerText) {
        item.setAttribute("class", "hidden");
      }
    }
  }

  setTimeout(() => {
    alert("Removed from Cart");
  }, 200);
}

// apply button event handelar function:
function applyDiscountButtonClickHandelar() {
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
applyDiscountBtn.addEventListener("click", applyDiscountButtonClickHandelar);
