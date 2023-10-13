export const renderItems = (dataGot) => {
  const ul = document.createElement("ul");
  ul.setAttribute("id", "cards");
  dataGot.forEach((element) => {
    const newLi = document.createElement("li");
    newLi.setAttribute("class", "container");

    const imagen = document.createElement("img");
    imagen.setAttribute("src", element.imageUrl);
    newLi.appendChild(imagen);

    const characters = document.createElement("p");
    characters.setAttribute("class", "characters");
    characters.innerHTML = element.fullName;
    newLi.addEventListener("click", () => {
      localStorage.setItem("idCharacter", JSON.stringify(element));
    });

    newLi.appendChild(characters);
    ul.appendChild(newLi);
  });
  return ul;
};

// Cuando el usuario hace scroll, se ejecuta myFunction
window.onscroll = function () {
  myFunction();
};

const menu = document.getElementById("myMenu");
const sticky = menu ? menu.offsetTop : 0; 

function myFunction() {
  if (menu && window.scrollY > sticky) {
    menu.classList.add("sticky");
  } else if (menu) {
    menu.classList.remove("sticky");
  }
}
