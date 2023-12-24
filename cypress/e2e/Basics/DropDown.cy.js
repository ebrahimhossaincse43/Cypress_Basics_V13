describe('Alert Test', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit('https://register.rediff.com/register/register.php');
  });

  it('Test', () => {
    cy.get('#country').select('17');
    cy.xpath('//tbody/tr[22]/td[3]/select[1]').select('03');
    cy.wait(5000);
  });
});
