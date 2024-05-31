let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");

plus.addEventListener("click", () => {
    h1.textContent =Number(h1.textContent) + 1;
});

minus.addEventListener("click", () => {
    h1.textContent =Number(h1.textContent) - 1;
});