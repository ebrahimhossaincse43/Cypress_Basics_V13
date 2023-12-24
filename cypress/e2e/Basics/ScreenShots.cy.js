describe('Alert Test', () => {
  beforeEach(() => {
    cy.viewport(1020, 780);
    cy.visit('https://register.rediff.com/register/register.php');
  });

  it('Test', () => {
    cy.get('[height="45"] > :nth-child(1) > img').screenshot();
    cy.screenshot();
    cy.wait(5000);
  });
});
