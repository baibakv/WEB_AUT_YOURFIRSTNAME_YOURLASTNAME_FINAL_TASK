import { FormPage } from '../pageObjects/formPage';

describe('test-site scenarios', () => {
  
  it('Fill Form', () => {
    // Expected Data mapped to table labels for dynamic validation
    const expectedData = {
      'Student Name': 'Baiba Kvizikevica',
      'Student Email': 'baiba@email.lv',
      'Gender': 'Female',
      'Mobile': '23456789',
      'Date of Birth': '28 February,1930',
      'Subjects': 'Economics',
      'Hobbies': 'Music',
      'Picture': 'cat.jpg',
      'Address': '101 Engineer street',
      'State and City': 'NCR Delhi'
    };

    // Open https://demoqa.com/automation-practice-form
    FormPage.visit();

    // Input all the necessary information
    FormPage.firstName.type('Baiba');
    FormPage.lastName.type('Kvizikevica');
    FormPage.userEmail.type('baiba@email.lv');
    FormPage.genderFemale.click();
    FormPage.userNumber.type('23456789');
    FormPage.currentAddress.type('101 Engineer street');

    // Set the - Date of Birth - with Calendar widget to - 28th of February, 1930.
    FormPage.setDateOfBirth('28', 'February', '1930');

    // Set Subjects to Economics.
    // Type economics and hit enter to trigger the auto-complete tag
    FormPage.subjectsInput.type('Economics{enter}');

    // Set Hobbies to Music.
    FormPage.hobbiesMusic.click();

    // Upload an image of your choice. 
    FormPage.uploadPictureInput.selectFile('cypress/files/cat.jpg');

    // Set State to NCR.
    FormPage.selectState('NCR');

    // Set City to Delhi.
    FormPage.selectCity('Delhi');

    // Click Submit.
    FormPage.submitButton.click({ force: true });

    // Validate that each Labeled row contains the correct information.
    FormPage.resultsTableRows.each(($row) => {
      const label = $row.find('td').eq(0).text().trim();
      const value = $row.find('td').eq(1).text().trim();
      
      // Assert that the value in the UI matches our expected data object
      expect(value).to.equal(expectedData[label]);
    });
  });
});