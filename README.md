# Playwright_Book_Management

This project is an automated test suite for a book management web application, created using **Playwright**.  
It was developed during a practical session of the **Bootcamp Mestre QA** and covers end-to-end user interactions like adding, listing, and searching books.<br><br>

**Features tested:**
- Homepage load and title validation
- Add a new book (name, author, number of pages)
- List all books
- Search for a book by ID
- Validate book details in the UI<br><br>

**Notes:**
- This project was built as part of a training module and assumes that the application is already running locally at 'http://localhost:3000/'

- You can modify the test values to suit your environment.

If any elements (like button names or field labels) change in the application, the test selectors will need to be updated accordingly.<br><br>


# How to use:

### 1. Prerequisites

a. Make sure you have **Node.js** installed on your machine.  
You can download it from [nodejs.org](https://nodejs.org)

b. Install **Playwright**, a Node.js library to automate Chromium, Firefox, and WebKit.

---

### 2. Steps

A. Clone the repository:

```bash
git clone https://github.com/your_username/Playwright_Book_Management
```

B. Install the dependencies:
```bash
npm install
```

C. Run the tests:
```bash
npx playwright test --ui
```
<br>

# What this test covers:

- Navigates to the homepage (http://localhost:3000/);

- Checks that the title includes the word 'Livros';

- Fills in the form with:

     -  Name: Mr Mercedes

    - Author: Stephen King

    - Pages: 400

- Clicks the 'Add' button;

- Clicks the 'List All Books' button;

- Verifies that the list of books is not empty;

- Checks that the first book contains the name 'Graziele'

- Searches for a book by 'ID 2';

- Validates the search result with the correct book data.
