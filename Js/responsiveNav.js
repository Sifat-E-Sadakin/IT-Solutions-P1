const nav = document.getElementById("nav-menu");
const showMenu = () => {
  if (nav.style.transform === "translateY(0%)") {
    nav.style.transform = "translateY(-200%)";
  } else {
    nav.style.transform = "translateY(0%)";
  }
};

const reset = () => {
  if (window.innerWidth > 576) {
    nav.style.transform = "translateY(0%)";
  }
};
setInterval(reset, 1000);
