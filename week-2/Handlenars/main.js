const classData = {
  classmates: [
    {
      name: "That on gal",
      description: "Always has the ansswer",
      is1: true,
      is2: false,
    },
    {
      name: "The weird dude",
      description: "Quick with a smile",
      is1: false,
      is2: true,
    },
    { name: "Taylor", description: "Just Taylor", is1: false, is2: true },
  ],
};

(function () {
  const source = $("#mates-template").html();
  const template = Handlebars.compile(source);
  const inject = template(classData);

  $("#list").append(inject);
})();

(function () {
  const source = $("#mates-template2").html();
  const template = Handlebars.compile(source);
  const inject = template(classData);

  $("#list").append(inject);
})();
