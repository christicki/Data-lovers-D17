// Aqui puedes agregar los datos que necesites para tus pruebas
// al menos debe tener uno que se llame "data"

/* export const filterData = (data, filterBy, value) => {
  const resultFilter = data.filter((obj) => {
    return obj[filterBy].includes(value);
  });
  return resultFilter;
}; */
// import { test, expect } from '@playwright/test'; // FAIL  tests-read-only/e2e/app.spec.js

// test.describe('Pagina interraciones', () => {
//   const sortOptions = { asc: 'asc', desc: 'desc'};
//   const liSelector = '#root > ul > li';
// })

import { test, expect } from '@playwright/test';

test.describe('Interacciones con la página local', () => {
  const pageURL = 'http://127.0.0.1:5501/src/index.html';
  const liSelector = '#root > ul > li';

  test('Verificar visibilidad de elementos de la lista', async ({ page }) => {
    // Navegar a la página local
    await page.goto(pageURL);

    // Realizar alguna interacción, por ejemplo, hacer clic en un botón o desplazarse hacia abajo
    // Agrega tus acciones aquí

    // Verificar que los elementos de la lista estén visibles en la página
    const listaElementos = await page.$$(liSelector);
    expect(listaElementos.length).toBeGreaterThan(0);
  });
});
