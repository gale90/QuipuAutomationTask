export class ShoppingCart {
  constructor(page) {
    this.page = page;
    this.addedProduct = page.locator(
      "tbody > tr >td.cart_description > p.product-name > a"
    );
  }

  async getProductName() {
    return this.addedProduct.innerText();
  }
}
