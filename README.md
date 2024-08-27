## Automation Task Overview

The automation task is implemented using Playwright with JavaScript. The automated tests cover the following scenarios:

1. Navigate and log in
2. Search for a product
3. Add a product to the cart
4. Verify that the product is added to the shopping cart

## Running the Tests

You have several options to run the tests:

1. **Run all tests**: 
   ```bash
   npx playwright test
   ```

2. **Run a specific test file**: 
   ```bash
   npx playwright test <name_of_spec_file>
   ```

3. **Run tests by tag**: 
   ```bash
   npx playwright test --grep '@tag_name'
   ```

## Folder Structure

- **Page Objects**: Located in the `pageObject` directory.
- **Playwright Fixtures**: Located in the `fixtures` directory.
- **Data Files**: Located in the `data` directory.
- **Tests**: Located in the `tests` directory.

