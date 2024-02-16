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
};

// ----------------------------------------
const allCards = document.querySelectorAll(".card");
for (let card of allCards) {
  card.addEventListener("click", function () {
    card.innerText === "Add to Cart"
      ? cardOperationMaker(card)
      : removeFromCart(card);
  });
}

function cardOperationMaker(card) {
  // get the product title and disply it:
  const productTitle = card.parentElement.children[1].innerText;
  addItem(productTitle);

  // get targeted product price:
  const productPrice = parseFloat(
    card.parentElement.children[2].children[0].innerText
  );

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
  setTimeout(() => {
    alert("Added to Cart");
  }, 200);
}

function removeFromCart(card) {
  // get card title:
  const productTitle = card.parentElement.children[1].innerText;
  
  // get product price:
  const productPrice = parseFloat(
    card.parentElement.children[2].children[0].innerText
  );

  // Set update total and total price and change text and color of add button:
  const currentTotalPrice = getInnerValueById("total-price") - productPrice;
  setInnerValueById("total-price", currentTotalPrice);
  setInnerValueById("total", currentTotalPrice);
  setTextAndColorByElement(card, "Add to Cart", "black");

  // Added hiddend if the product title is match
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

  setTimeout(()=>{
    alert('Removed from Cart')
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
