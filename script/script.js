const buttonHome = document.getElementById("home-logo");

buttonHome.addEventListener("click", () => {
  window.location.href = "../index.html";
});

const bars = document.querySelector(".bars");

const showMenu = () => {
  const nav = document.getElementById("nav");
  const navContain = nav.classList.contains("show-menu-items");

  !navContain
    ? nav.classList.add("show-menu-items")
    : nav.classList.remove("show-menu-items");
};

bars.addEventListener("click", (e) => {
  console.log("Click");
  showMenu();
});