// Aqui puedes agregar los datos que necesites para tus pruebas
// al menos debe tener uno que se llame "data"

export const filterData = (data, filterBy, value) => {
  const resultFilter = data.filter((obj) => {
    return obj[filterBy].includes(value);
  });
  return resultFilter;
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

export const sortData = (data, sortBy, sortOrder) => {
  if (sortOrder === "A-Z") {
    // Ordenar de A-Z en orden ascendente
    return data.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return -1;
      if (a[sortBy] > b[sortBy]) return 1;
      return 0;
    });
  } else if (sortOrder === "Z-A") {
    // Ordenar de Z-A en orden descendente
    return data.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) return -1;
      if (a[sortBy] < b[sortBy]) return 1;
      return 0;
    });
  } else {
    // Si sortOrder no es 'asc' o 'desc', devuelve el arreglo sin cambios
    return data;
  }
};
