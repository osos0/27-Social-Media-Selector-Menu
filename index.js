const SocialEl = document.querySelector(".Social");
const secondConEl = document.querySelector(".secondCon");
const arroEl = document.querySelectorAll(".fa-solid");
const optionEl = document.querySelectorAll(".option");
const secparEl = document.querySelector(".Social p");

console.log(secparEl);

SocialEl.addEventListener("click", () => {
  secondConEl.classList.toggle("active");
  arroEl.forEach((ele) => {
    ele.classList.toggle("active");
  });
});
optionEl.forEach((opt) => {
  opt.onclick = function () {
    secparEl.innerHTML = opt.innerHTML;
    secondConEl.classList.toggle("active");
  };
});
