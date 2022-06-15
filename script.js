const mobileNav = document.querySelector(".mobile-nav");
const mobileNavLinks = document.querySelector(".mobile-nav-links");
const links = mobileNavLinks
  .querySelector(".mobile-nav-list")
  .querySelectorAll("a");
mobileNav.addEventListener("click", () => {
  mobileNavLinks.classList.toggle("hide");
});
mobileNavLinks.querySelector("div").addEventListener("click", () => {
  mobileNavLinks.classList.add("hide");
});

const news = document.querySelectorAll(".news");
news.forEach((e) => {
  e.addEventListener("mouseover", () => {
    e.querySelector("ul").classList.remove("hide");
    e.querySelector(".fa-arrow-right").classList.remove("hide");
    e.querySelector(".fa-arrow-down").classList.add("hide");
  });
});
news.forEach((e) => {
  e.addEventListener("mouseout", () => {
    e.querySelector("ul").classList.add("hide");
    e.querySelector(".fa-arrow-down").classList.remove("hide");
    e.querySelector(".fa-arrow-right").classList.add("hide");
  });
});
