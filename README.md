The main features and technologies implemented in this project are as follows:
  
  Features:
  
      User Authentication: Users can log in to manage their to-do items.
      CRUD Operations: Users can create, read, update, and delete to-do items.
      Form Validation: Ensures that to-do items have valid descriptions and deadlines.
      Navigation: Users can navigate between different views, such as the list of to-do items and the form for creating or updating a to-do item.
      Error Handling: Precise errors are shown, and success messages are displayed to the user.


Technologies:

    React 19.0: A JavaScript library for building user interfaces.
    React Router: For handling navigation between different views.
    Formik: For managing form state and validation of forms.
    Axios: For making HTTP requests to the backend API.
    useState and useEffect: React hooks for managing state and side effects.
    Spring Boot 3.4 : A Java-based framework for building backend services.
    Spring Security: For handling user authentication and authorization.
    Spring Data JPA: For interacting with H2 database.
    RESTful API: The backend exposes a RESTful API for managing to-do items, which the frontend interacts with.

Project Structure:

    Frontend: Located in the React-TodoApp repository.
    Backend: Implemented using Spring Boot, exposing endpoints for CRUD operations on to-do items.


This project demonstrates a full-stack application with a clear separation of concerns between the frontend and backend, leveraging modern web development technologies to provide a seamless user experience.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
