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

function getInnerTextByElementMatchTagName(elements, tagNam) {
  let result = "";
  for (let element of elements) {
    if (element.tagName === tagNam) {
      result = element.innerText;
    }
  }
  return result;
}

function updateDiscountAfterApplyedCoupn(currentTotalPrice) {
  const discountedPrice = (currentTotalPrice * 20) / 100;
  const currentDiscount = getInnerValueById("discount-price");
  if (currentDiscount > 0) {
    setInnerValueById("discount-price", discountedPrice);
  }
}

// ----------------------------------------
const allCards = document.querySelectorAll(".add-button");
for (let card of allCards) {
  // get all children of the card:
  const cardChildren = card.parentElement.children;

  // get targeted product title:
  let productTitle = getInnerTextByElementMatchTagName(cardChildren, "H2");

  // get prices
  let prices = undefined;
  for (let element of cardChildren) {
    if (element.tagName === "P") {
      prices = element.children;
    }
  }

  // get targeted product price:
  let productPrice = parseFloat(
    getInnerTextByElementMatchTagName(prices, "SPAN")
  );

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

  // update discount if the copun have been applyed(that means user can add new product after applyed the discount coupn):
  updateDiscountAfterApplyedCoupn(currentTotalPrice);
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

  // update discount after removing an item from list:
  updateDiscountAfterApplyedCoupn(currentTotalPrice);
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
