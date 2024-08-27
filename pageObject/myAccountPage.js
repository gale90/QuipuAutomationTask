export class MyAccount {
  constructor(page) {
    this.page = page;
    this.welcomeMessage = page.locator(
      'p:has-text("Welcome to your account. Here you can manage all of your personal information and orders.")'
    );
  }

  async getWelcomeMessage() {
    return this.welcomeMessage;
  }
}
