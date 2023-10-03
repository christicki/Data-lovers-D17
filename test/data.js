// Aqui puedes agregar los datos que necesites para tus pruebas
// al menos debe tener uno que se llame "data"

export const filterData = (data, filterBy, value) => {
  const resultFilter = data.filter((obj) => {
    const normalizedValue = value.toLowerCase();
    const normalizedDataValue = obj[filterBy].toLowerCase();

    return normalizedDataValue.includes(normalizedValue);
  
    /*return obj[filterBy] === value;*/
  }); 
  return resultFilter;  
};

  export const sortData = (data, sortBy, sortOrder) => {
    return 1;
}; 


