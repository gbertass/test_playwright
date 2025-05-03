// @ts-check
import { test, expect } from '@playwright/test';

test('Test for book management', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Livros/);

  //type name
  const name = page.getByRole('textbox', { name: 'Nome' });
  await name.fill('Mr Mercedes');

  //type author
  const author = page.getByRole('textbox', { name: 'Autor' });
  await author.fill('Stephen King');

  //type pages
  const pages = page.getByPlaceholder('Páginas');
  await pages.fill('400');

  //click the add button
  const clickaAdd = page.getByRole('button', { name: 'Adicionar' });
  await clickaAdd.click();

  //list all books
  const listbooks = page.getByRole('button', { name: 'Listar Todos os Livros' });
  await listbooks.click();

  //verify list
  const verifylist = page.locator('#lista-livros');
  const numberofbooks = await verifylist.count();
  await expect(numberofbooks).toBeGreaterThan(0);

  //verify the first book
  const firstbook = page.getByText('ID: 1,');
  await expect(firstbook).toContainText('Graziele');

  //search book by ID
  const searchId = page.getByPlaceholder('ID do Livro');
  await searchId.fill('2');

  //click the "Buscar" button
  const clickBuscar = page.getByRole('button', { name: 'Buscar' });
  await clickBuscar.click();

  //book found
  const foundbook = page.locator('#livro-encontrado');
  await expect(foundbook).toContainText('ID: 2, Nome: mr Mercedes, Autor: stephen, Páginas: 400')

});

