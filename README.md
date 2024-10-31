# Trello Clone - Client Side

This is the client-side application of a **Trello Clone**, built using **Next.js**, **TypeScript**, and **Tailwind CSS**. The project replicates the core functionalities of Trello, allowing users to manage projects with workspaces, boards, lists, and cards.

If you want to test the application, use this email and password to enter the page:

    Email: test@gmail.com
    Pass: 123

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)

## Features

- **User Authentication**: Users can create an account and log in securely.
- **Workspace Management**: Create, update, and delete workspaces. Invite other users to collaborate in a workspace.
- **Board Management**: Create, update, and delete boards within a workspace.
- **List and Card Management**:
  - Create lists within boards.
  - Create, update, delete, and move cards between lists with drag-and-drop functionality (similar to Trello).
  - Drag and drop lists to change their order.
- **Card Details**:
  - Add due dates to cards using a date picker component.
  - Add and update descriptions using **Quill.js** (rich text editor).
- **Responsive Design**: Built with Tailwind CSS for a modern, responsive UI.

## Technologies Used

- **Next.js**: React framework for building server-rendered React applications.
- **TypeScript**: Typed superset of JavaScript for safer code.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **React Date Picker**: A React component for handling date selection.
- **Quill.js**: Rich text editor for editing card descriptions.

## Getting Started

To get a local copy of the project up and running, follow these simple steps:

### Installation

1. **Clone the repository**:

    ```bash
   git clone https://github.com/your-username/trello-clone-client.git
   cd trello-clone-client
2. **Install dependencies**:
   ```bash
   npm install
3. **Configure Environment Variables**:

    Create a .env.local file in the root directory and add the required environment variables:
   ```bash
   API_HOST=<your-api-url>
   NEXT_PUBLIC_API_HOST=<your-api-url>
    ```

### Running the Project
  To run the project locally:
  ```bash
   npm run dev
  ```
  The app will be available at http://localhost:3000.

## Project Structure

Here's a brief overview of the project's structure:
```bash
/components    - Reusable UI components
/app           - Next.js pages
/lib           - Fetch functions
/context       - React context for managing state
```

## Dependencies
- **Next.js**: Framework for server-rendered React applications.
- **TypeScript**: For static type checking.
- **Tailwind CSS**: For styling.
- **@hello-pangea/dnd**: For drag-and-drop functionality (Trello-like feature).
- **React Date Picker**: For selecting due dates on cards.
- **Quill.js**: Rich text editor for card descriptions.

Check the package.json for the full list of dependencies.