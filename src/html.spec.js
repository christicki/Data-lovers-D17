import fs from 'fs';
import { renderItems } from './view';

const html = fs.readFileSync('./src/index.html', 'utf-8');
document.body.innerHTML = html;

const renderDOM = (data) => {
  const items = renderItems(data);
  // function renderItems can return html string or a node element
  if (typeof items === 'string') {
    document.querySelector('#root').innerHTML = items;
  } else if (items instanceof HTMLElement) {
    document.querySelector('#root').appendChild(items);
  } else {
    throw new Error('Error: renderItems should return an HTML string or an HTMLElement');
  }
}

describe('Uso de HTML semántico', () => {
  // Inicializa tus datos o carga datos de la página de manera dinámica si es necesario

  beforeEach(() => {
    // Renderiza la página (puedes cargar datos si es necesario)
    renderDOM(/* datos reales o código para cargar datos */);
  });

  describe('<header>', () => {
    let header, h1;
    beforeEach(() => {
      header = document.querySelector('header');
      h1 = header.querySelector('h1');
    });

    it('La aplicación usa un <header>', () => {
      expect(header).not.toBeNull();
    });

    it('<header> no tiene atributo "id"', () => {
      expect(header.getAttribute('id')).toBeNull();
    });

    it('<header> no tiene atributo "class"', () => {
      expect(header.getAttribute('class')).toBeNull();
    });

    it('<header> es padre de un <h1>', () => {
      expect(h1).not.toBeNull();
    });

    it('<h1> no tiene atributo "id"', () => {
      expect(h1.getAttribute('id')).toBeNull();
    });

    it('<h1> no tiene atributo "class"', () => {
      expect(h1.getAttribute('class')).toBeNull();
    });
  });

  // Otras pruebas para elementos como <select>, <ul>, <footer>...

  // Ejemplo de una prueba de selección de opciones de filtrado (ajusta según tus necesidades)
  it('Selección de opciones de filtrado', () => {
    // Obtén el elemento de selección de casas
    const filterHousesSelect = document.getElementById('filterHouses');

    // Realiza las acciones de selección y verifica los resultados esperados
  });
});
