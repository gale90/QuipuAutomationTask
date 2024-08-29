import products from "../data/products.js";
import {test, expect} from "../fixtures/fixtures.js"

test.beforeEach(async ({ page, loginClass, myAccountClass }) => {
  await loginClass.navigateToHomepage()
  await loginClass.loginUser()
  expect(page.url()).toContain('my-account');
  await expect(await myAccountClass.getWelcomeMessage()).toBeVisible()
});

test('Search for product, add to cart and verify that product was added to cart', {tag: '@e2e'}, async ({ page, baseClass, productClass, shoppingCartClass }) => {
  await baseClass.searchForProduct()
  expect(await page.title()).toContain(products.inStockProduct); //changed to verify title of product instead the current url
  await expect(await productClass.getProductTitle()).toBeVisible() 
  
  // add to cart
  await productClass.addProductToCart()
  await expect(await productClass.getProductAddedMessage()).toBeVisible()
  await baseClass.clickShoppingCartButton()
  expect(page.url()).toContain('controller=order');
  expect(await shoppingCartClass.getProductName()).toEqual(products.inStockProduct)
});


