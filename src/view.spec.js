import { renderItems } from './view';  //test/view.spec.js

describe('renderItems', () => {
  test('debería renderizar una lista de elementos', () => {
    const dataGot = [{ fullName: 'Personaje 1', imageUrl: 'imagen1.jpg' }, { fullName: 'Personaje 2', imageUrl: 'imagen2.jpg' }];
    const ul = renderItems(dataGot);
    const liElements = ul.querySelectorAll('li');

    // Asegúrate de que se haya creado un <ul> con los elementos adecuados
    expect(ul.tagName).toBe('UL');
    expect(liElements.length).toBe(2);
    expect(liElements[0].textContent).toContain('Personaje 1');
    expect(liElements[1].textContent).toContain('Personaje 2');
  });
});
