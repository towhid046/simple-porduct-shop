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

function setInnerTextById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
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
const allcardBtns = document.querySelectorAll(".add-button");
for (let cardBtn of allcardBtns) {
  // get all children of the cardBtnBtn:
  const cardBtnChildren = cardBtn.parentElement.children;

  // get targeted product title:
  let productTitle = getInnerTextByElementMatchTagName(cardBtnChildren, "H2");

  // get targeted product price:
  let productPrice = parseFloat(
    getInnerTextByElementMatchTagName(cardBtnChildren, "P").split(" ")[1]
  );

  // added event listener to cardBtn button: mainly the cardBtn is the calss of card buttons;
  cardBtn.addEventListener("click", function () {
    cardBtn.innerText === "Add to Cart"
      ? addToCartClickHandelar(cardBtn, productTitle, productPrice)
      : removeToCartClickHandelar(cardBtn, productTitle, productPrice);
  });
}

function addToCartClickHandelar(cardBtn, productTitle, productPrice) {
  // Add an item to the porduct list:
  addItem(productTitle);

  // get current total price:
  let currentTotalPrice = getInnerValueById("total-price");
  currentTotalPrice += productPrice;

  // set total price:
  setInnerValueById("total-price", currentTotalPrice);

  // set total
  setInnerValueById("total", currentTotalPrice);
  setInnerValueById("nav-subtotal", currentTotalPrice);

  // set text and color:
  setTextAndColorByElement(cardBtn, "Remove from Cart", "white");

  // update discount if the copun have been applyed(that means user can add new product after applyed the discount coupn):
  updateDiscountAfterApplyedCoupn(currentTotalPrice);
}

function addItem(productTitle) {
  const li = document.createElement("li");
  li.innerText = productTitle;
  const ul = document.getElementById("items");
  ul.appendChild(li);

  // show an alert after adding an item to the cart
  // setTimeout(() => {
  //   alert("Added to Cart");
  // }, 200);

  // add item count fo nav bar cart icon:
  const itemCounter = parseInt(getInnerTextById("item-counter"));
  setInnerTextById("item-counter", itemCounter + 1);
  setInnerTextById("total-items", itemCounter + 1);
}

// apply button event handelar function:
function applyDiscountButtonClickHandelar() {
  // get input fild value"
  const inputElement = document.getElementById("discount-input-fild");
  const inputValue = inputElement.value;

  //  get total current price
  const currentTotalPrice = getInnerValueById("total-price");
  const discountCode = getInnerTextById("copun-code");
  if (inputValue === discountCode && currentTotalPrice > 200) {
    // calculate discount price:
    const discount = (currentTotalPrice * 20) / 100;

    // set discount price
    setInnerValueById("discount-price", discount);

    // set total after discount:
    setInnerValueById("total", currentTotalPrice - discount);
    setInnerValueById("nav-subtotal", currentTotalPrice - discount);

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

function removeToCartClickHandelar(cardBtn, productTitle, productPrice) {
  // get current total price:
  const currentTotalPrice = getInnerValueById("total-price") - productPrice;

  // set total price:
  setInnerValueById("total-price", currentTotalPrice);

  // set total:
  setInnerValueById("total", currentTotalPrice);
  setInnerValueById("nav-subtotal", currentTotalPrice);

  // change button text and color:
  setTextAndColorByElement(cardBtn, "Add to Cart", "black");

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

  // setTimeout(() => {
  //   alert("Removed from Cart");
  // }, 200);

  // update discount after removing an item from list:
  updateDiscountAfterApplyedCoupn(currentTotalPrice);

  // update the nav item counter:
  let currentItems = parseInt(getInnerTextById("item-counter"));
  setInnerTextById("item-counter", currentItems - 1);
  setInnerTextById("total-items", currentItems - 1);
}

// nav bar view cart click handelar:
const viewCartElement = document.getElementById("nav-bar-view-cart");

viewCartElement.addEventListener("click", function () {
  setTimeout(function () {
    document.getElementById("products-section").classList.add("hidden");
    document.getElementById("hero-section").classList.add("hidden");
    document.getElementById("view-cart-section").classList.remove("hidden");
    document.getElementById("view-cart-section").style.marginTop = "90px";
  }, 300);
});

// dark theme light theme:
const themeBtn = document.getElementById("theme");

themeBtn.addEventListener("click", function (event) {
  event.preventDefault();
  
  themeBtn.innerHTML === `<i class="fa-solid rounded-full p-3 bg-white fa-moon" aria-hidden="true"></i>`
    ? themeController(themeBtn, "black", "white", "#0f172a", `<i class="fa-regular rounded-full p-3 bg-white text-black fa-moon"></i>`)
    : themeController(themeBtn, "white", "black", "#fafafa", `<i class="fa-solid rounded-full p-3 bg-white fa-moon"></i>`);
});

function themeController(btn, bgColor, color, cardBg, text) {
  document.body.style.backgroundColor = bgColor;
  document.body.style.color = color;

  document.getElementById('discount-input-fild').style.backgroundColor = color;
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.style.backgroundColor = cardBg;
    card.style.color = color;
  });
  btn.innerHTML = text;
}
