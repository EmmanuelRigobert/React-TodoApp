import axios from "axios";
// axios is a promise-based HTTP client for the browser and node.js. It is a popular library that allows you to make HTTP requests to REST endpoints. It is used to make API asynchronous requests to the server.

// function retrieveHelloWorld() {
//   return axios.get("http://localhost:8080/hello-world");
// }

// export retrieveHelloWorld;

const apiClient = axios.create({
  baseURL: "http://localhost:8080",
});

export const retrieveUserTodos = (username) => apiClient.get(`/users/${username}/todos`);

export const deleteUserTodos = (username,id) => apiClient.delete(`/users/${username}/todos/${id}`);

export const retrieveUserTodo = (username, id) => apiClient.get(`/users/${username}/todos/${id}`);

export const updateTodo = (username, id,todo) => apiClient.put(`/users/${username}/todos/${id}`,todo);

export const createTodo = (username, todo) => apiClient.post(`/users/${username}/todos`, todo);
