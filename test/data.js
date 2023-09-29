// Aqui puedes agregar los datos que necesites para tus pruebas
// al menos debe tener uno que se llame "data"

export const filterData = (data, filterBy, value) => {
  const resultFilter = data.filter((obj) => {
    return obj.filterBy === value;
  });

  return resultFilter;
};

export const sortData = (data, sortBy, sortOrder) => {
  return 1;
};
