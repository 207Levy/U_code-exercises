const render = function (data) {
  $("body").append(`<div>${data.items[0].volumeInfo.title}</div>`);
};

$.ajax({
  method: "GET",
  url: "https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521",
  success: render,
  error: function (a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
  },
});
