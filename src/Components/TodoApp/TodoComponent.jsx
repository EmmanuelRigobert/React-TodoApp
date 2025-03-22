import { useParams, useNavigate } from 'react-router-dom';
import { updateTodo, retrieveUserTodo, createTodo, } from './api/TodoApiService';
import { useEffect, useState } from 'react';
import { useAuth } from './Security/AuthContext';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function TodoComponent() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [description, setDescription] = useState('');
  const [dateline, setDateline] = useState('');

  const authContext = useAuth();
  const username = authContext.username;

  useEffect(() => {
    retrieveTodo();
  }, [id]);// the useEffect hook would be called whenever the id changes in the URL. That is: when the user navigates to a different todo.
  

  function retrieveTodo() {
    if (id != '-1') {
        retrieveUserTodo(username, id)
          .then((response) => {
            console.log(response);
            setDescription(response.data.description);
            setDateline(response.data.dateline);
          })
          .catch((error) => {
            console.log(error);
          });
    }
  }

  function todoUpdater(values) {
    console.log(values);
    if(id === '-1') {
          const todo = {
            username,
            description: values.description,
            done: false,
            dateline: values.dateline,
          };
          console.log(todo);
        createTodo(username, todo)
          .then((response) => {
            navigate('/todos');
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            console.log(todo);
          }
          );
    } else {
          const todo = {
            id,
            username,
            description: values.description,
            done: false,
            dateline: values.dateline,
          };
        updateTodo(username, id, todo)
          .then((response) => {
            navigate('/todos');
          })
          .catch((error) => {
            console.log(error);
          });
    }
  }
    
    function validate(values) {
      let errors = {};
      if (!values.description) {
        errors.description = 'Beschreibung fehlt';
      } else if (values.description.length < 10) {
        errors.description = 'Beschreibung muss mindestens 10 Zeichen lang sein';
      }
      if (!values.dateline) {
        errors.dateline = 'Stichtag fehlt';
      }else if (values.dateline < new Date().toISOString().split('T')[0]) {
        errors.dateline = 'Stichtag muss in der Zukunft liegen';
      }
      return errors
    }

  return (
    <div>
      <h1>Todo Component</h1>
      <div className='container'>
        <div>Todo Component for id - {id}</div>
        <div>
          <Formik initialValues={{ description, dateline }} enableReinitialize={true} onSubmit={todoUpdater} validate={validate} validateOnChange={false} validateOnBlur={false}>
            {/* Formik authomatically manages default values in form using initialValues. 
            Validate would be called first before the updateTodo
            validateOnChange and validateOnBlur would be set to false to prevent the validation from being called on every change in the form. Rather it would be called only when the form is submitted.
            */}
            {(props) => (
              <Form>
                <ErrorMessage name='description' component='div' className='alert alert-warning' />
                <ErrorMessage name='dateline' component='div' className='alert alert-warning' />
                <fieldset className='form-group'>
                  <label>Beschreibung</label>
                  <Field
                    className='form-control'
                    type='text'
                    name='description'
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <label>Stichtag</label>
                  <Field
                    className='form-control'
                    type='date'
                    name='dateline'
                  />
                </fieldset>
                <div>
                  <button className='btn btn-success m-5' type='submit'>
                    Speichern
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default TodoComponent;