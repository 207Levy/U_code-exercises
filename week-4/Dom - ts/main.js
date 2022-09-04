"use strict";
const someElement = document.querySelector(".foo");
someElement.addEventListener("input", (event) => {
    const target = event.target;
    console.log("event", target.value); // WORKS
});
