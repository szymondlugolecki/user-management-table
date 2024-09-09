# User Management Table

This project is a React application that implements a user management table with Redux and TypeScript. It fetches user data from a mock API and provides simple filtering functionality.

## Challenges I've faced:
The only challenge I faced was gaining knowledge on how to use Redux. I wasn't familiar with the
library, but luckily it shares similarities with lots of other state management solutions I've used.

## Features

- Displays user information (name, username, email, and phone) in a table
- Implements simple filtering for each column
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
- `src/app/store.ts`: Redux store configuration
- `src/App.tsx`: Main application component

## Approach

1. Set up the Redux store and create a slice for managing user data and filters
2. Implemented an async thunk to fetch user data from the JSONPlaceholder API
3. Created a UsersTable component to display user data and handle filtering
4. Used TailwindCSS for basic styling
5. Integrated the UsersTable component into the main App component

## Technologies Used

- React
- Redux Toolkit
- TypeScript
- TailwindCSS
- Vite (for project bundling and development server)