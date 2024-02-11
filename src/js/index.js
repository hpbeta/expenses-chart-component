const bar = document.querySelectorAll(".day");
const numbersBar = document.querySelectorAll(".numbers-bar");

bar.forEach((day, index) => {
  day.addEventListener("mouseenter", () => {
    const numberAtivo = document.querySelector(".mostrar");
    if (numberAtivo) {
      numberAtivo.classList.remove("mostrar");
    }
    numbersBar[index].classList.add("mostrar");
  });
});
