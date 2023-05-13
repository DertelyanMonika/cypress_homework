
describe('Search Functionality', () => {
  it('Searches for and displays results', () => {
    // Navigate to the page with search functionality
    cy.visit('https://pregomesh.com/en-am')
    cy.get('span[class="sf__search-mb-icon"]').click()
    cy.get('input[name="q"]').type('ring')

    // Assert that search results are displayed
    cy.contains('Results for')
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
