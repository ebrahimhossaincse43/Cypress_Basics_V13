describe('Alert Test', () => {
  beforeEach(() => {
    // cy.viewport(1920, 1080);
    cy.visit('https://userinyerface.com/game.html');
  });

  it('Test', () => {
    cy.get('.dropdown__opener').click();
    cy.wait(3000);
    cy.get('.dropdown__list > :nth-child(4)').click();
  });
});
