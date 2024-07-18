describe('template spec', () => {

  //
  it('Scenario 1', () => {
    cy.visit('https://leyaonline.com/pt/'), { timeout: 200000 };
    cy.get('#searchbar-large').type('GEORGE{enter}'),{ timeout: 20000 };
    cy.get('.similar-books .book-card .book-title').contains('O Triunfo dos Porcos').parents('.book-card').find('a.second').click();
    cy.get('.show-more').contains('Quinta Manor');
    
  })

  it('Scenario 2', () => {
    cy.visit('https://leyaonline.com/pt/'), { timeout: 200000 };
    cy.get('#searchbar-large').type('1984{enter}');
    cy.get('.book-card-container .book-card .book-author').contains('GEORGE ORWELL').parents('.book-card').find('a.second').click();
    cy.get('._sinpose-address').contains('ISBN: 9789722071550');
    cy.get('._sinpose-address').contains('Dimensões: 235 x 157 x 23 mm');
    cy.get('._sinpose-address').contains('Páginas: 344');
  })

  it('Scenario 3', () => {
    cy.visit('https://leyaonline.com/pt/'), { timeout: 200000 };
    cy.get('#searchbar-large').type('1984{enter}');
    cy.get('.book-card-container .book-card .book-author').contains('GEORGE ORWELL').parents('.book-card').find('a.second').click();
    cy.get('.similar-books .book-card .book-title').contains('A Quinta dos Animais');
    //Verify that the book "A Quinta dos Animais" is authored by the same author.
    //contains the word in the description

  })

  it('Scenario 4', () => {
    cy.visit('https://leyaonline.com/pt/'), { timeout: 200000 };
    cy.get('#searchbar-large').type('1984{enter}');
    cy.get('.book-card-container .book-card .book-author').contains('GEORGE ORWELL').parents('.book-card').find('a.second').click();
    cy.get('.choose-options .book').find('a').click()
    cy.get('.b-count').contains('1');
    //Add the book to the basket.
    //Confirm that the number of items in the basket is "1.

  })

  it('Scenario 5', () => {
    cy.visit('https://leyaonline.com/pt/'), { timeout: 200000 };
    cy.get('#darkmode').find('a').click();
    cy.get('#darkmode').find('i.icon-moon').should('exist'); //
    cy.get('html').should('have.css','background-color').and('include','rgb(30, 31, 30)'); //
 
  })

  /*1-Search 1984
    2-Find the Book by Author name "George Orwell"
    3-Add to the Basket
    4-Go to Checkout
    5-Input Promo Code "BroadVoice"
    6-See that the code is not Valid
  */ 
  it('Scenario 6 ', () => {
    cy.visit('https://leyaonline.com/pt/'), { timeout: 200000 };
    cy.get('#searchbar-large').type('1984{enter}');
    cy.get('.book-card-container .book-card .book-author').contains('GEORGE ORWELL').parents('.book-card').find('a.second').click();
    cy.get('.choose-options .book').find('a').click()
    cy.get('.checkout-btn').find('a').click();
    cy.get('.promo').get('.promo-code').type('BroadVoice');
    cy.get('.promo form').submit();
    cy.get('#cart-wrapper').contains('O Vale de Desconto que está tentar utilizar é inválido.')
  })

  /*1-Click on the Burguer menu
    2-Click to see the "Tecnologia" tab
    3-Click on the filters 
    4-Choose "€20-30€" Filter
    5-Check if the Filter is aplied
  */
  it('Scenario 7', () => {
    cy.visit('https://leyaonline.com/pt/'), { timeout: 200000 };
    cy.get('.header-content .menu-toggler-btn').find('a[data-bs-toggle="offcanvas"]').click();
    cy.get('.offcanvas-menu-item').contains('Tecnologia').click()
    cy.get('.search-filter-btn').click();
    cy.get('.filter-item').contains('€20 - €30').click()
    cy.get('.search-contents-sec .filetr-tag-btns').find('.filter-item').contains('€20 - €30');
  })

})