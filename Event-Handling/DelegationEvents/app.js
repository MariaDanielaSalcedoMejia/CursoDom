//EVENTO POR CADA ELEMENTO

// const listItems = document.querySelectorAll("li");

// listItems.forEach((item) => {
//   item.addEventListener("click", (event) => {
//     event.target.classList.toggle("highlight");
//   });
// });

//EVENTO POR MEDIO DEL CONTENEDOR PADRE

const list = document.querySelector("ul");

list.addEventListener("click", (event) => {
  event.target.closest("li").classList.toggle("highlight");
});
