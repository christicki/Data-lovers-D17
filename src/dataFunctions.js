// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return [];
};
// Esta función toma una lista de personajes, un campo para filtrar (por ejemplo, "family") y el valor a filtrar (por ejemplo, "Stark").
// Devuelve una nueva lista con los personajes que coinciden con el valor en el campo especificado.
export const filterData = (data, field, value) => {
  return data.filter((character) => character[field] === value);
};
