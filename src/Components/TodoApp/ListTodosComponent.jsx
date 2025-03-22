import React, { useState } from 'react';
import { useEffect } from 'react';
import { deleteUserTodos, retrieveUserTodos, } from './api/TodoApiService';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Security/AuthContext';

function ListTodosComponent() {
  // const today = new Date();
  // const dateLine = new Date(today.getFullYear() + 3, today.getMonth(), today.getDate());
  
  const [todos, setTodos] = useState([]);

  const [message, setMessage] = useState(null);

  const authContext = useAuth();
  const username = authContext.username;
  
  const navigate = useNavigate();

  // const todos = [

    // { id: 1, description: 'React learnen', done: false, dateLine: dateLine },
    // { id: 2, description: 'Spring Boot lernen', done: false, dateLine: dateLine },
    // { id: 3, description: 'KI lernen', done: false, dateLine: dateLine }
  // ];

  useEffect(// usseEffects is a hook that allows us to perform side effects in function components.
    () => {
      retrieveTodos()
    }, []// the useEffect hook would be called only once when the component is mounted.
  );

  function retrieveTodos() {


      
        retrieveUserTodos(username)
          .then((response) => {
            // console.log(response)
            setTodos(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      
  }

  function deleteTodo(id) {
    console.log('delete'+id);
    deleteUserTodos(username, id)
      .then((response) => {
        console.log(response);
        setMessage(`Aufgabe ${id} erfolgreich gelöscht`);
        retrieveTodos();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function updateTodo(id) {
    console.log('update'+id);
    navigate(`/todo/${id}`);
  }

  function addTodo() {
    navigate(`/todo/-1`);
  }


  return (
    <div className='container'>
      <h1>Aufgaben, die Sie erledigen möchten </h1>
      {message && <div className='alert alert-success'>{message}</div>}

      <br />
      <div className='container'>
      <table className='table'>
        <thead>
          <tr>
            <th>Beschreibung</th>
            <th>Ist abgeschlossen?</th>
            <th>Stichtag</th>
            <th>Update</th>
            <th>Löschen</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.description}</td>
              <td>{todo.done.toString()}</td>
              <td>{todo.dateline.toString()}</td>
              <td>
                <button className='btn btn-warning' onClick={() => updateTodo(todo.id)}>Update</button>
              </td>
              <td>
                <button className='btn btn-danger' onClick={() => deleteTodo(todo.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className='row'>
        <button className='btn btn-success m-5' onClick={() => addTodo()}>Add</button>
      </div>
      <br />
    </div>
  );
}

export default ListTodosComponent