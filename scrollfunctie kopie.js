///JS code volgt voor de scroll down functie, dit heb ik kunnen maken door deze YT video: https://www.youtube.com/watch?v=SJVCvnKM_lI

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})