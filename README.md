# User Management Table

This project is a React application that implements a user management table with Redux and TypeScript. It fetches user data from a mock API and provides advanced filtering functionality.

## Features

- Displays user information (name, username, email, and phone) in a table
- Implements advanced filtering for each column
- Uses Redux for state management
- Utilizes TypeScript for type safety

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

- `src/features/users/usersSlice.ts`: Contains the Redux slice for managing user data and filters
- `src/features/users/UsersTable.tsx`: The main component that displays the user table and filter inputs
- `src/features/users/UsersTable.module.css`: Styles for the UsersTable component
- `src/app/store.ts`: Redux store configuration
- `src/App.tsx`: Main application component

## Approach

1. Set up the Redux store and create a slice for managing user data and filters
2. Implemented an async thunk to fetch user data from the JSONPlaceholder API
3. Created a UsersTable component to display user data and handle filtering
4. Used CSS modules for component-specific styling
5. Integrated the UsersTable component into the main App component

## Technologies Used

- React
- Redux Toolkit
- TypeScript
- CSS Modules
- Vite (for project bundling and development server)

## Future Improvements

- Add pagination for large datasets
- Implement sorting functionality for each column
- Add unit tests for components and Redux logic
- Enhance the UI with a more polished design
