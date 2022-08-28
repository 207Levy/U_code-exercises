const fetch = function (name) {
  $.ajax({
    method: "GET",
    url: `http://api.giphy.com/v1/gifs/search?q=${name}&api_key=ABDJsRrj9G88JjhHj14Wb86U5JKWwQKk&limit=5`,
    success: function (data) {
      $("#container").append(
        `<iframe src=${data.data[0].embed_url} title="description"></iframe>`
      );
      console.log(data.data[0]);
    },
    error: function (xhr, text, error) {
      console.log(text);
    },
  });
};

fetch();

$("#btn").on("click", function () {
  $("#container").empty();
  let input = $("#input").val();
  $("#input").val("");
  fetch(input);
});
