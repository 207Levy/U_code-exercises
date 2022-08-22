const AddToCart = function () {
  $("#cart").append(`<p>${$(this).text()}</p>`);
};

$("#items").on("click", ".item", AddToCart);
