# [Kanban Board Application]

This application, developed with React JS, serves as a Kanban board solution, seamlessly integrating with the supplied API. It empowers users to flexibly customize the Kanban board according to their preferences for grouping and sorting. The dynamic functionality enables users to group tickets based on status, user, or priority, and to sort displayed tickets by priority or title. Notably, the application preserves the user's chosen view state even when the page is reloaded, ensuring a consistently tailored experience.

## Features

- Group tickets by status, user, or priority.
- Sort tickets by priority or title.
- Visually appealing and responsive design.
- Ability to save the user's view state in local storage.
- Priority levels are defined as Urgent (4), High (3), Medium (2), Low (1), and No priority (0).


## Installation

To run the Kanban board application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/creator79/Kanban.git
   ```

2. Navigate to the project directory:
    ```bash
    cd kanban
    ```

3. Install the required dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```
5. Open your web browser and visit http://localhost:5173 to use the application.


## Usage

1. Click the "display" button to fetch and display the tickets from the provided API.

2. Select one of the three grouping options: "By Status," "By User," or "By Priority."

3. Choose the sorting option: "Priority" or "Title."

4. The Kanban board will dynamically adjust to reflect your choices.

5. The application will save your view state, so you can return to your preferred settings even after a page reload.


## Contributing

If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository on GitHub.

2. Clone the forked repository to your local machine.

3. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/your-feature-name
   ```
4. Make your changes, commit them, and push to your fork.

5. Open a pull request to the original repository, explaining the changes you made.


## Contact

If you have any questions, suggestions, or feedback, feel free to contact the project maintainer:

- **Name:** Vivek Upadhyay


Enjoy using the Kanban board application to manage your tasks efficiently!
