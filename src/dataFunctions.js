export const filterDataFamily = (data, filterBy, value) => {
  const resultFilter = data.filter((obj) => {
    const fieldValue = obj[filterBy].toLowerCase();
    const filterValue = value.toLowerCase();
    return fieldValue.includes(filterValue);
  });
  return resultFilter;
};

export const filterDataLifeStatus = (data, lifeStatus) => {
  if (lifeStatus === "Vivos") {
    return data.filter((character) => !character.death);
  } else if (lifeStatus === "Muertos") {
    return data.filter((character) => character.death);
  } else {
    return data;
  }
};

export const sortData = (data, sortBy, sortOrder) => {
  const dataCopy = [...data];

  if (sortOrder === "asc") {
    // Ordenar de A-Z en orden ascendente
    return dataCopy.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return -1;
      if (a[sortBy] > b[sortBy]) return 1;
      return 0;
    });
  } else if (sortOrder === "desc") {
    // Ordenar de Z-A en orden descendente
    return dataCopy.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) return -1;
      if (a[sortBy] < b[sortBy]) return 1;
      return 0;
    });
  } else {
    // Si sortOrder no es 'asc' o 'desc', devuelve el arreglo sin cambios
    return dataCopy;
  }
};

//Estadistica de personajes que han sobrevivido por casa
export function showSurvivorsByHouse(data) {
  // Utiliza el método .map() para crear un nuevo array con booleanos que indiquen si cada personaje está vivo o no
  const survivorsArray = data.map((character) => !character.death);

  // Utiliza el método .reduce() para contar el número de sobrevivientes (elementos con valor true en el array)
  const survivors = survivorsArray.reduce((count, isSurvivor) => count + (isSurvivor ? 1 : 0), 0);

  return survivors;
}