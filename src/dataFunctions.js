export const example = () => {
  return "example";
};

export const anotherExample = () => {
  return [];
};

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

function obtenerParteNumerica(propiedad) {
  // Utiliza una expresión regular para encontrar la parte numérica
  const matches = propiedad.match(/\d+/);
  if (matches) {
    // Si se encontraron coincidencias, toma la primera como la parte numérica
    return parseInt(matches[0]);
  } else {
    // Si no se encontraron coincidencias numéricas, devuelve NaN
    return NaN;
  }
}

export function calcularEdadPromedio(data) {
  const charactersConEdad = data.filter((character) => {
   // Verifica que tanto born como death tengan valores numéricos
   const nacimientoNumerico = obtenerParteNumerica(character.born);
   const muerteNumerica = obtenerParteNumerica(character.death);
   return !isNaN(nacimientoNumerico) && !isNaN(muerteNumerica);
  });


  if (charactersConEdad.length === 0) {
    return "Edad promedio no disponible";
  }

  const edades = charactersConEdad.map((character) => {
    const nacimiento = parseInt(character.born);
    const muerte = parseInt(character.death);
    return muerte - nacimiento;
  });

  const sumaEdades = edades.reduce((acumulador, edad) => acumulador + edad, 0);
  const edadPromedio = sumaEdades / charactersConEdad.length;
  return `Edad promedio: ${edadPromedio.toFixed(2)} años`;
}