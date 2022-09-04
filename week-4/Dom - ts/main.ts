const someElement = document.querySelector(".foo") as HTMLInputElement;

someElement.addEventListener("input", (event) => {
  const target = event.target as HTMLInputElement;
  console.log("event", target.value); // WORKS
});