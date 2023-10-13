export const filterData = (data, filterBy, value) => {
  return data.filter((character) => character[filterBy] === value);
};

export const filterDataFamily = (data, filterBy, value) => {
  const resultFilter = data.filter((obj) => {
    // Utiliza toLowerCase() para hacer la búsqueda insensible a mayúsculas/minúsculas
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
    // Si el estado de vida es diferente de "Vivos" o "Muertos", devuelve todos los personajes.
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
  // return result
};

//Estadistica de personajes que han sobrevivido por casa
export function showSurvivorsByHouse(data, selectedHouse) {
  const charactersOfHouse = data.filter(
    (character) => character.family === selectedHouse
  );

  let survivors = 0;

  charactersOfHouse.forEach((character) => {
    if (!character.death) {
      survivors++;
    }
  });
  console.log(survivors);

  return survivors; 
}