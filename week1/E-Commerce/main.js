const products = [];

function openAbout() {
  cleanContent();
  console.log("About clicked");
  let div = document.createElement("div");
  div.setAttribute("class", "injected");
  div.innerHTML = '<object type="text/html" data="About.html"></object>';
  document.body.appendChild(div);
}

function cleanContent() {
  if (document.getElementsByClassName("injected")) {
    const box = document.getElementsByClassName("injected");
    for (let b of box) {
      b.remove();
    }
  }
}

function openProducts() {
  cleanContent();
  console.log("products clicked");
  let div = document.createElement("div");
  div.setAttribute("class", "injected");

  document.body.appendChild(div);
  if (products.length === 0) {
    div.innerHTML = "There are no products on site right now...";
  } else {
    for (product of products) {
      let item = document.createElement("li");
      item.setAttribute("class", "item");
      item.innerHTML = `name: ${product.name} | price: ${product.price}`;
      let img
    }
  }
}
