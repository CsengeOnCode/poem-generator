function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "hello hello hello",
    autoStart: true,
    delay: 50,
  });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
