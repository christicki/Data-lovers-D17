// estas funciones son de ejemplo

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
  
    newLi.appendChild(characters);
    ul.appendChild(newLi);

  });
  return ul;
};