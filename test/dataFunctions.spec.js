import { filterDataFamily, filterDataLifeStatus, sortData, showSurvivorsByHouse } from '../src/dataFunctions.js';

//Prueba para filterDataFamily (filter)
describe('filterDataFamily', () => {
  it.only('should filter data by family', () => {
    // Datos de prueba
    const characters = [
      { firstName: 'Jon', lastName: "Snow", family: "House Stark" },
      { firstName: 'Jamie', lastName: "Lannister", family: "House Lannister" },
      { firstName: 'Arya', lastName: "Stark", family: "House Stark" },
    ];

    // Llama a la función filterDataFamily
    const filteredCharacters = filterDataFamily(characters, 'family', 'House Stark');

    // Asegúrate de que el resultado sea el esperado
    // Aquí puedes usar una aserción (por ejemplo, usando una biblioteca de pruebas como Jest o Chai)
    // para verificar si los personajes se han filtrado correctamente.
    expect(filteredCharacters).toEqual([
      { firstName: 'Jon', lastName: "Snow", family: "House Stark" },
      { firstName: 'Arya', lastName: "Stark", family: "House Stark" },
    ]);
  });
});

//Prueba para filterDataLifeStatus (filter)
describe('filterDataLifeStatus', () => {
  it.only('should filter characters who are "Vivos"', () => {
    const data = [
      { fullName: 'Jon Snow', death: false },
      { fullName: 'Cersei Lannister', death: true },
      { fullName: 'Arya Stark', death: false },
    ];

    const filteredData = filterDataLifeStatus(data, 'Vivos');

    expect(filteredData).toEqual([
      { fullName: 'Jon Snow', death: false },
      { fullName: 'Arya Stark', death: false },
    ]);
  });

  it('should filter characters who are "Muertos"', () => {
    const data = [
      { fullName: 'Jon Snow', death: false },
      { fullName: 'Cersei Lannister', death: true },
      { fullName: 'Arya Stark', death: false },
    ];

    const filteredData = filterDataLifeStatus(data, 'Muertos');

    expect(filteredData).toEqual([
      { fullName: 'Cersei Lannister', death: true },
    ]);
  });

  it('should return all characters for an invalid lifeStatus', () => {
    const data = [
      { fullName: 'Jon Snow', death: false },
      { fullName: 'Cersei Lannister', death: true },
      { fullName: 'Arya Stark', death: false },
    ];

    const filteredData = filterDataLifeStatus(data, 'Invalid');

    expect(filteredData).toEqual(data);
  });
});

//Prueba para sortData (sort)
describe('sortData', () => {
  it.only('should sort data in ascending order by fullName', () => {
    const data = [
      { fullName: 'Jon Snow', family: 'House Stark' },
      { fullName: 'Jamie Lannister', family: 'House Lannister' },
      { fullName: 'Arya Stark', family: 'House Stark' },
    ];

    const sortedData = sortData(data, 'fullName', 'asc');

    expect(sortedData).toEqual([
      { fullName: 'Arya Stark', family: 'House Stark' },
      { fullName: 'Jamie Lannister', family: 'House Lannister' },
      { fullName: 'Jon Snow', family: 'House Stark' },
    ]);
  });

  it('should sort data in descending order by fullName', () => {
    const data = [
      { fullName: 'Jon Snow', family: 'House Stark' },
      { fullName: 'Jamie Lannister', family: 'House Lannister' },
      { fullName: 'Arya Stark', family: 'House Stark' },

    ];

    const sortedData = sortData(data, 'fullName', 'desc');

    expect(sortedData).toEqual([
      { fullName: 'Jon Snow', family: 'House Stark' },
      { fullName: 'Jamie Lannister', family: 'House Lannister' },
      { fullName: 'Arya Stark', family: 'House Stark' },
    ]);
  });

  it('should return data unchanged for invalid sortOrder', () => {
    const data = [
      { fullName: 'Jon Snow', family: 'House Stark' },
      { fullName: 'Jamie Lannister', family: 'House Lannister' },
      { fullName: 'Arya Stark', family: 'House Stark' },
    ];

    const sortedData = sortData(data, 'fullName', 'invalid');

    expect(sortedData).toEqual(data);
  });
});

//Prueba para Estadistica de personajes que han sobrevivido por casa (estadistica)
describe('showSurvivorsByHouse', () => {
  it.only('debería contar el número de sobrevivientes', () => {
    // Datos de prueba
    const testData = [
      { fullName: 'Jon Snow', death: false },
      { fullName: 'Cersei Lannister', death: true },
      { fullName: 'Arya Stark', death: false },
    ];

    // Llama a la función y verifica el resultado
    const result = showSurvivorsByHouse(testData);
    expect(result).toEqual(2); // Cambia este valor al número esperado de sobrevivientes
  });
});