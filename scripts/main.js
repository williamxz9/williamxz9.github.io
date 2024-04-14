// Image switcher code
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "imagens/cs1.6ff.jpg") {
    myImage.setAttribute("src", "imagens/cs1.6gg.png");
  } else {
    myImage.setAttribute("src", "imagens/cs1.6ff.jpg");
  }
};

// Personalized welcome message code

let myButtoon = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Por favor digite o seu nome.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla é legal, " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla é legal, " + storedName;
}

myButtoon.onclick = () => {
  setUserName();
};
