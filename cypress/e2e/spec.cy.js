
describe('Search Functionality', () => {
  it('Searches for and displays results', () => {
    // Navigate to the page with search functionality
    cy.visit('https://pregomesh.com/en-am')
    cy.get('span[class="sf__search-mb-icon"]').click()
    cy.get('input[name="q"]').type('ring')
    cy.wait(5000); // wait for 5 seconds
    cy.contains('Results for ').should('be.visible');
  })
})

describe('Login Functionality', () => {
  it('Logs in successfully', () => {
    // Navigate to the login page
    cy.visit('https://pregomesh.com/account/login?return_url=%2Faccount')
    // Enter login details
    cy.get('input[name="customer[email]"]').eq(0).type('Insert a valid login')
    cy.get('input[name ="customer[password]"]').eq(0).type('Insert a valid password')
    cy.get('button[type="submit"]').eq(0).click()

    // Assert that login is successful
    cy.contains('My Account')
  })
})


describe('SearchItem page', () => {
  it('Navigate to item page', () => {
    // Navigate to the page with the catalog
    cy.visit('https://pregomesh.com/collections/all')
    // Click on the item to view its details
    cy.get('div[data-image-id="27989674754115"]').click()
     // Verify that the item is the desired one
    cy.get('div[class = "prod__title"]').contains('Ag')
  })
})
