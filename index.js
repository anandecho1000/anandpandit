function menuToggle() {
  var x = document.querySelector(".top-nav");
  document.querySelector(".menu-icon").classList.toggle("animate__bounceIn");
  x.classList.toggle("responsive");
  x.classList.toggle("animate__animated");
}

function sun(e) {
  e.classList = "hidden";
  console.log(e);
  document.querySelector("#moon").classList = "mode-icon";
  document.documentElement.style.setProperty("--bg", "#fff");
  document.documentElement.style.setProperty("--txt", "#000022");
}
function moon(e) {
  e.classList = "hidden";
  console.log(e);
  document.querySelector("#sun").classList = "mode-icon";
  document.documentElement.style.setProperty("--bg", "#000");
  document.documentElement.style.setProperty("--txt", "#fff");
}

if ("serviceWorker" in navigator) {
  console.log("serviceWorker: supported");
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("sw.js")
      .then((reg) => console.log("serviceWorker: registered "))
      .catch((er) => console.log("serviceWorker: registration failed "));
  });
}
