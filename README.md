# Todo List Application

Simple Todo List application built with Vite.js, React, TypeScript.  
The following were also used to create the Application:

-   `JSONPlaceholder` - online REST API;
-   `Redux Toolkit` - state manager;
-   `axios` - for making HTTP requests;
-   `react-hot-toast` - simple and elegant notifications for React;
-   `Tailwindcss` - utility-first CSS framework.

## Installation

**Note:** _You can install and test Application with Docker or without it._

## I. Without Docker

Before running the application, make sure you have `Node.js` installed.

1. Clone the repository:

    ```bash
    git clone <URL_repository>
    cd ss-todo-list
    ```

2. Install dependencies:  
   `npm install`

3. Run the following command to start the development server:  
   `npm run dev`

4. Runs the app in the **development** mode:\
   Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

5. Builds the app for production to the `build` folder.  
   `npm run build`

## II. With Docker

1. Build the Docker Container  
   `docker-compose up --build --no-recreate -d`

2. Enter the container:  
   `docker exec -it todo_docker sh`

3. Install Node packages and start the app:  
   `npm i && npm run dev`

4. Open [http://localhost:5173](http://localhost:5173) to view Application in the browser.
