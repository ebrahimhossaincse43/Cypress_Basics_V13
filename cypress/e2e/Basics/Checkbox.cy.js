/// <reference types='Cypress' />

describe('Cypress Basic', () => {
  it('Check Box Checked and Unchecked', function () {
    cy.visit('https://codenboxautomationlab.com/practice/');

    //Xpath
    let option1_xpath = "//input[@id='checkBoxOption1']";
    let option2_xpath = "//input[@id='checkBoxOption2']";
    let option3_xpath = "//input[@id='checkBoxOption3']";

    //Value
    let option1_value = 'option1';
    let option2_value = 'option2';
    let option3_value = 'option3';

    //Single check
    cy.xpath(option1_xpath).check();
    //wait
    cy.wait(2000);

    //Single uncheck
    cy.xpath(option1_xpath).uncheck();

    //wait
    cy.wait(2000);

    //Multiple check and unchecked
    cy.get('input[type=checkbox]').check([option1_value, option2_value]);

    //wait
    cy.wait(2000);

    //Multiple unchecked
    cy.get('input[type=checkbox').uncheck([option1_value, option2_value]);
  });
});
