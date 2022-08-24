const posts = [
  {
    name: "Or",
    text: "hello",
  },
  {
    name: "Omer",
    text: "world",
  },
  {
    name: "Orya",
    text: "bye",
  },
  {
    name: "Orly",
    text: "bye...",
  },
];

const render = function () {
  $(".box").empty();
  for (let post of posts) {
    let postbox = $(
      `<div class="post"><div class="name">${post.name}</div><div class="text">${post.text}</div></div>`
    );
    $(".box").append(postbox);
  }
};

let box = $('<div class="box"></div>');
$("body").append(box);

$(".btn").on("click", function () {
  let user = $("#name").val();
  let txt = $("#txt").val();
  posts.push({ name: user, text: txt });
  render();
});
