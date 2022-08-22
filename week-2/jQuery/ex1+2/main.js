function addHuman() {
  $(".names").append(`<li>${$("#input").val()}</li>`);
  $("#input").val("");
}

const inputBar = $(`<div class="input-bar"></div>`);
$(inputBar).append(
  `<input type="text" id="input" placeholder="Name..."></input>`
);

$(inputBar).append(`<button>Add Human</button>`);
$("body").append(inputBar);

$(".input-bar").on("click", "button", addHuman);
