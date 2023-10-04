
export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return [];
};

export const filterData = (data, filterBy, value) => {
  return data.filter((character) => character[filterBy] === value);
};

export const sortData = (data, sortBy, sortOrder) => {
  if (sortOrder === "asc") {
    // Ordenar de A-Z en orden ascendente
    return data.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return -1;
      if (a[sortBy] > b[sortBy]) return 1;
      return 0;
    });
  } else if (sortOrder === "desc") {
    // Ordenar de Z-A en orden descendente
    return data.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) return -1;
      if (a[sortBy] < b[sortBy]) return 1;
      return 0;
    });
  } else {
    // Si sortOrder no es 'asc' o 'desc', devuelve el arreglo sin cambios
    return data;
  }
};