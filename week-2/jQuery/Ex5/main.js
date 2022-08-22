const AddToCart = function () {
  $("#cart").append(`<p class="a">${$(this).text()}</p>`);
};

const removeFromCart = $("#items").on("click", ".item", AddToCart);
$("#cart").on("click", ".a", function () {
  console.log("++");
  $(this).remove();
});


$('#btn').click(alert('hi'))