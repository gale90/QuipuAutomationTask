import products from "../data/products";

export class ProductPage {
    constructor(page) {
      this.page = page;
      this.productTitle = page.locator(`//h1[text()='${products.inStockProduct}']`)
      this.productSizeDDL = page.locator('#group_1');
      this.addToCartBtn = page.locator("p#add_to_cart > button[type='Submit']")
      this.productAddedMessage = page.locator('h2:has-text("Product successfully added to your shopping cart")')
      this.closeWindowBtn = page.getByTitle('Close window')
    }
  

    async getProductTitle() {
        return this.productTitle
    }

    async getProductAddedMessage() {
        return this.productAddedMessage
    }

    async clickCloseWindowButton(){
        this.closeWindowBtn.click()
    }

    async clickAddToCartButton(){
        await this.addToCartBtn.click()
    }

    async selectProductSize(){
        await this.productSizeDDL.selectOption('L');
    }

    async addProductToCart(){
        this.selectProductSize()
        this.clickAddToCartButton()
        this.clickCloseWindowButton()
    }
   


}
  