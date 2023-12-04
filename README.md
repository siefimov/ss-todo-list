# Initial Setup 

## I. Without Docker

Commands to perform the initial setup of the project.

### `npm install`

Installs project dependencies.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the **development** mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## II. With Docker

### Build the Docker Container
Run this command to build the image on your local machine and start the container. You only need to run this command the first time, and whenever you make changes to docker-compose.yml.\
`docker-compose up --build --no-recreate -d`

From the second time, you can use\
`docker-compose up -d`

### Build and start the Application
Enter the container using the following command:
`docker exec -it vite_docker sh`
After you have entered the container and you need to run the commands to install the Node packages and start the app.
`npm i && npm run dev`

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.






