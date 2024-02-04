const themeButton = document.getElementById("theme");

function OnClick() {
  document.body.classList.toggle("dark");
}

themeButton.addEventListener("click", OnClick);

let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Envoi du formulaire détecté !");

  let errorContainer = document.querySelector(".message-error");
  let errorList = document.querySelector(".message-error ul");

  errorList.innerHTML = "";
  errorContainer.classList.remove("visible");

  let pseudo = document.querySelector("#pseudo");

  if (pseudo.value.length < 1) {
    errorContainer.classList.add("visible");
    pseudo.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le champ prénom doit être rempli";

    errorList.appendChild(err);
  } else {
    pseudo.classList.add("success");
  }

  let nom = document.querySelector("#nom");

  if (nom.value.length < 1) {
    errorContainer.classList.add("visible");
    nom.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le champ nom doit être rempli";

    errorList.appendChild(err);
  } else {
    nom.classList.add("success");
  }

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

  let axe = document.querySelector("#axe");

  if (axe.value == "") {
    errorContainer.classList.add("visible");
    axe.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le champ axe doit être choisis";

    errorList.appendChild(err);
  } else {
    axe.classList.add("success");
  }

  let successContainer = document.querySelector(".message-success");
  successContainer.classList.remove("visible");

  if (
    pseudo.classList.contains("success") &&
    email.classList.contains("success") &&
    nom.classList.contains("success") &&
    axe.classList.contains("success")
  ) {
    successContainer.classList.add("visible");
  }
});

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

const lightbox = new SimpleLightbox(".card a");

const option = {
  gutterPixels: 50,
};

const filterizr = new Filterizr(".portfolio-elements", option);

let filtersList = document.querySelectorAll(".filters li");

filtersList.forEach(function (filterItem) {
  filterItem.addEventListener("click", function () {
    document.querySelector(".filters .active").classList.remove("active");
    this.classList.add("active");
  });
});
