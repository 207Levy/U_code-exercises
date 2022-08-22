const aDynamicDiv = `<div id="container"></div>`;
const aDynamicbox = `<div class="box"></div>`;

const div = $(aDynamicDiv);
div.append(aDynamicbox, aDynamicbox);
$("body").append(div);


$(".box").hover(
  function(){
    $(this).css("background-color", "orange");
  },
  function(){
    $(this).css("background-color", "purple");
  }
)