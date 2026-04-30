import { BasePage } from './basePage';

export class FormPage extends BasePage {
  static get url() {
    return 'https://demoqa.com/automation-practice-form';
  }

  static visit() {
    cy.visit(this.url);
  }

  static get firstName() { 
    return cy.get('#firstName'); 
  }

  static get lastName() {
     return cy.get('#lastName'); 
  }

  static get userEmail() { 
    return cy.get('#userEmail'); 
  }

  static get userNumber() { 
    return cy.get('#userNumber'); 
  }

  static get currentAddress() { 
    return cy.get('#currentAddress'); 
  }
  
  static get genderFemale() { 
    return cy.get('label[for="gender-radio-2"]'); 
  }

  static get hobbiesMusic() { 
    return cy.get('label[for="hobbies-checkbox-3"]'); 
  }

  static get dobInput() { 
    return cy.get('#dateOfBirthInput'); 
  }

  static get dobMonthSelect() { 
    return cy.get('.react-datepicker__month-select'); 
  }

  static get dobYearSelect() { 
    return cy.get('.react-datepicker__year-select'); 
  }
  
  static get subjectsInput() { 
    return cy.get('#subjectsInput'); 
  }

  static get stateDropdown() { 
    return cy.get('#state'); 
  }

  static get cityDropdown() { 
    return cy.get('#city'); 
  }

  static get uploadPictureInput() { 
    return cy.get('#uploadPicture'); 
  }

  static get submitButton() { 
    return cy.get('#submit'); 
  }

  static get resultsTableRows() { 
    return cy.get('.table tbody tr'); 
  }

  static setDateOfBirth(day, month, year) {
    this.dobInput.click();
    this.dobMonthSelect.select(month);
    this.dobYearSelect.select(year);
    cy.get(`.react-datepicker__day--0${day}:not(.react-datepicker__day--outside-month)`).click();
  }

  static selectState(stateName) {
    this.stateDropdown.click();
    cy.get('[id^="react-select-3-option"]').contains(stateName).click();
  }

  static selectCity(cityName) {
    this.cityDropdown.click();
    cy.get('[id^="react-select-4-option"]').contains(cityName).click();
  }
}