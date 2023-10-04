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
