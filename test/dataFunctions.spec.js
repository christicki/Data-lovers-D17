import { example, anotherExample } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';
console.log(fakeData);
import { filterData } from './dataFunctions';

// Datos de prueba
const characters = [
  { firstName: 'Jon', lastName: "Snow", fullName: "Jon Snow", title: "King of the North", family: "House Stark", 
  imageUrl: "https://thronesapi.com/assets/images/jon-snow.jpg", born: "283 DC" },
  { firstName: 'Jamie', lastName: "Lannister", fullName: "Jamie Lannister", title: "Lord Commander of the Kingsguard", family: "House Lannister", 
  imageUrl: "https://thronesapi.com/assets/images/jaime-lannister.jpg", born: "262 DC", death: "305 DC" },
  
];

describe('example', () => {

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});

describe('anotherExample', () => {

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
