const fetch = function (queryType, queryValue) {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
    success: function (data) {
      data.items.forEach((a) => console.log(a.volumeInfo.title));
    },
    error: function (xhr, text, error) {
      console.log(text);
    },
  });
};
