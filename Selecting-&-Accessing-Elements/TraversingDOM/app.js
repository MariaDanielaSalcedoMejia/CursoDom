// const parent = document.getElementById("parent");
// console.log(parent);

// const children = parent.children;
// console.log(children);

// const firstChild = parent.firstElementChild;

// console.log(firstChild);

// const lastChild = parent.lastElementChild;
// console.log(lastChild);

// const previousSibling = parent.previousElementSibling;
// console.log(previousSibling);

// const nextSibling = parent.nextElementSibling;
// console.log(nextSibling);

//metodos para seleccionar elementos
// children; // live HTMLCollection
// childNodes; // live NodeList
// firstChild; // live NodeList
// firstElementChild; // non-live HTMLCollection
// lastChild; // live NodeList
// lastElementChild; // non-live HTMLCollection
// previousSibling; // live NodeList
// previousElementSibling; // non-live HTMLCollection anterior hermano
// nextSibling; // live NodeList siguiente hermano
// nextElementSibling; // non-live HTMLCollection

const children2 = document.querySelector("li");
console.log(children2);

const parent2 = children2.parentNode;
console.log(parent2);//traer nodo padre

const grandParent = children2.parentElement;
console.log(grandParent);//trae el elemento padre

const grandGrandParent = children2.closest("menu"); // este último es el más utilizado
console.log(grandGrandParent);//trae al bisabuelo del elemento hijo

// parentNode; // live NodeList
// parentElement; // non-live HTMLCollection
// closest(selector); // este último es el más utilizado