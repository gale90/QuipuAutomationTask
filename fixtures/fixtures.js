import { test as base } from "@playwright/test";
import { ShoppingCart } from "../pageObject/shoppingCartPage";
import { Login } from "../pageObject/loginPage";
import { MyAccount } from "../pageObject/myAccountPage";
import { BasePage } from "../pageObject/basePage";
import { ProductPage } from "../pageObject/productPage";

export const test = base.extend({
  shoppingCartClass: async ({ page }, use) => {
    await use(new ShoppingCart(page));
  },
  loginClass: async ({ page }, use) => {
    await use(new Login(page));
  },
  myAccountClass: async ({ page }, use) => {
    await use(new MyAccount(page));
  },
  baseClass: async ({ page }, use) => {
    await use(new BasePage(page));
  },
  productClass: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
});

export { expect } from "@playwright/test";
