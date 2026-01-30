const links = document.querySelectorAll(".menu-list__link");
const btn = document.querySelector(".main__button");

const allLinks = [...links, btn];

allLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // останавливаем стандартное поведение браузера

    const id = link.getAttribute("href").substring(1); //достаем из href его значение, и отрезаем первый символ, то есть убираем # для того чтоб использовать метод getElementById
    const section = document.getElementById(id); //получаем нужную нам секцию

    if (section) {
      seamless.scrollIntoView(section, {
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  });
});
