# To-Do List 📋✅
A simple and interactive to-do list application for task management.  Built using HTML, CSS, and JavaScript. Supports task addition, completion (single click), and deletion (double click). Data persistence using browser's local storage.

A simple and intuitive web-based To-Do List application to help users manage their daily tasks. Built with a focus on usability and persistence, the app ensures your tasks are saved even after refreshing the browser.

## Features 🚀

- **Add Tasks**: Easily add new tasks to your list.
- **Mark as Complete**: Single-click to mark tasks as completed (line-through effect).
- **Delete Tasks**: Double-click to remove tasks permanently from the list.
- **Persistent Storage**: Uses `localStorage` to save tasks, ensuring they remain after a page reload.


## Technologies Used 🛠️

- **HTML5**: For structuring the application.
- **CSS3**: To create a visually appealing and responsive design.
- **JavaScript**: Implements core functionality, such as task management and `localStorage`.

##Project Structure 📂

to-do-list/
│
├── index.html         # Main HTML file
├── style.css          # Stylesheet for the application
├── script.js          # JavaScript logic for task management
└── README.md          # Project documentation

##How It Works 📝

Add Tasks: Enter a task in the input box and click "Add" to include it in your list.
Mark Complete: Click on a task to mark it as complete (adds a line-through effect).
Remove Tasks: Double-click on a task to delete it from the list.
Persistent Storage: Tasks are saved to localStorage, so they are not lost on page reload.

##Key Functions 🔧

addtolist(value): Adds a new task to the list and displays it.
remove(value): Removes the specified task from the list and updates localStorage.
localStorage: Stores all tasks persistently in the browser.

##Contribution 🤝

Contributions are welcome! Feel free to fork the repository and submit pull requests with improvements, bug fixes, or new features.
