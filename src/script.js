function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-prompt");
  let apiKey = "b6461bfaaot32c8f10f63ac1e954cc39";
  let context =
    "you are a romantic poem creator, who loves to write short poems. Your mission is to generate a 4 line poem. Show the poem using basic HTML and separate each line with a <br />. Please only write the generated poem";
  let prompt = `generate a short poem about ${userInput}`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `Generating a romantic poem about ${userInput.value}...`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
