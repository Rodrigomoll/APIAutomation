# Booking API Test Suite

This test suite consists of several tests to validate the functionality of a booking API.

## Installation

1. Clone the repository:

   git clone https://github.com/Rodrigomoll/APIAutomation.git

2. Navigate to the project directory

    cd APIAutomation/tests/

3. Create a Booking, to execute the test that creates a new booking

    npx playwright test booking-api-test.spec.js

4. Search Booking by ID, to execute the test that searches for a booking by its ID:

    npx playwright test booking-search-test.spec-js 

5. Update Addional Needs of a Booking, to execute the test that updates additional needs of a booking don't forget to use the id just created up update the addional needs.

    npx playwright test booking-update-test.spec.js 

6. Delete Booking by ID, to execute the test that deletes a booking by its ID. Don't forget to use the ID just created or updated.

    npx playwright test booking-delete-test.spec.js 

7. Search Booking by ID after Deletion, To execute the test that searches for a booking by its ID after deletion:

    npx playwright test booking-search-after-delete-test.spec.js

Be careful to use the ID created up update, delete and search after a delete.




