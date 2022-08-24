$(".generator").on("click", function () {
  const computer = $(this).closest(".computer");
  let pid = computer.children(".processor").attr("id");
  let cmp_id = computer.data().id;
  let bus = computer.children(".BUS").text();
  console.log({ pid, cmp_id, bus });
});

$(".validator").on("click", function () {
  const computer = $(this).closest(".computer");
  let gen_txt = computer.children(".processor").children(".generator").text();
  let mb = computer.children(".MB").text();
  let qr = [];
  computer
    .children(".processor")
    .children(".QR")
    .each(function (indx) {
      qr.push($(this).text());
    });
  console.log({ gen_txt, mb, qr });
});
