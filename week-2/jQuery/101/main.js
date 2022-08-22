const header = $("h1").css("color", "blue");
$(".red-div").css("color", "red");
$("#brown-div").css("color", "brown");

$("li:nth-child(1)").css("color", "green");
$("li:nth-child(2)").css("color", "pink");

$("button").click(() => alert($("#my-input").val()));

$(".box").hover(
  function () {
    $(this).css("background-color", "blue");
  },
  function () {
    $(this).css("background-color", "purple");
  }
);

$("p").hover(
  function () {
    $(this).css("background-color", "yellow");
  },
  function () {
    $(this).css("background-color", "pink");
  }
);
