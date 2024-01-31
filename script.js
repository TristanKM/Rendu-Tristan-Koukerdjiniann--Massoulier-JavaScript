/*
alert("Mon SCRIPT")
console.log("Mon SCRIPT")
console.warn("Mon SCRIPT");
console.error("Mon SCRIPT");
*/

const themeButton = document.getElementById("theme");

function onClick() {
  document.body.classList.toggle("dark");
}

themeButton.addEventListener("click", onClick);

let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Envoi du formulaire detecté !");
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let errorContainer = document.querySelector(".message-error");
  let errorList = document.querySelector(".message-error ul");
  errorList.innerHTML = "";
  errorContainer.classList.remove("visible");
  let email = document.querySelector("#email");

  if (email.value == "") {
    errorContainer.classList.add("visible");
    email.classList.remove("success");
    let err = document.createElement("li");
    err.innerText = "Le champ email ne peut pas être vide";
    errorList.appendChild(err);
  } else {
    email.classList.add("success");
  }
});

let prenom = document.querySelector("#prenom");
if (prenom.value.lenght < 6) {
  errorContainer.classList.add("visible");
  prenom.classList.remove("success");
  let err = document.createElement("li");
  err.innerText = "Le champ  prenom doit contenir au mons 6 caractères";
  errorList.appendChild(err);
} else {
  prenom.classList.add("success");
}

let successContainer = document.querySelector(".message-success");
successContainer.classList.remove("visible");
if (
  prenom.classList.contains("success") &&
  email.classList.contains("success")
) {
  successContainer.classList.add("visible");
}

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});