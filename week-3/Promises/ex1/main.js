const bookname = function (data) {
  if (data.items != undefined) {
    return data.items[0].volumeInfo.title;
  } else {
    return null;
  }
};

$.get("https://random-word-api.herokuapp.com/word").then(function (word) {
  let bookPromise = $.get(
    `https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`
  );
  let gifPromise = $.get(
    `http://api.giphy.com/v1/gifs/search?q=${word}&api_key=ABDJsRrj9G88JjhHj14Wb86U5JKWwQKk&limit=1`
  );
  Promise.all([bookPromise, gifPromise]).then(function (results) {
    $("#res").append(`<p> Book title: ${bookname(results[0])}</p>`);
    $("#res").append(
      `<iframe src=${results[1].data[0].embed_url} title="description"></iframe>`
    );
    console.log(word);
  });
});
