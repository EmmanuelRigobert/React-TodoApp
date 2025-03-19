import "./TodoApp.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useParams, Link} from "react-router-dom";

export default function TodoApp() {
  return (
    <div className='TodoApp'>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginComponent />} />
          <Route path='/login' element={<LoginComponent />} />
          <Route path='/welcome/:username' element={<WelcomeComponent />} />
          <Route path='/todos' element={<ListTodosComponent />} />

          <Route path='*' element={<ErrorComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function LoginComponent() {

  const [username, setUsername] = useState("Emmanuel");
  const [password, setPassword] = useState("dummy");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const navigate = useNavigate();


  function handleUsernameChange(event){
    setUsername(event.target.value);
  }

  function handlePasswordChange(event){
    setPassword(event.target.value);
  }

  function hadleSubmit(){
    if(username === "Emmanuel" && password === "dummy"){
      console.log("Login Successful");
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      navigate(`/welcome/${username}`);
    }else{
      setShowSuccessMessage(false);
      setShowFailureMessage(true);
      console.log(showFailureMessage);
      console.log(showSuccessMessage)
    }
  }

  function ShowSuccessComponent(){
    if(showSuccessMessage){
      return <div className="successMessage">Authentification Successfull</div>
    }
    return null;
  }

  return (
    <div className='LoginComponent'>
      <h1>Login Component</h1>

      <ShowSuccessComponent />
      {showFailureMessage && <div className='failureMessage'>Authentification Failed</div>}
      <div className='LoginForm'>
        <div>
          <label>User Name</label>
          <input type='text' name='username' onChange={handleUsernameChange} value={username} />
        </div>
        <div>
          <label>Password</label>
          <input type='password' name='password' onChange={handlePasswordChange} value={password} />
        </div>
        <button name='login' className='loginButton' onClick={hadleSubmit}>
          Login
        </button>
      </div>
    </div>
  );
}

 function WelcomeComponent() {

    const {username} = useParams(); // useParams is a hook that allows you to access the parameters in the URL of the current route.
    console.log(username);
  
    return <div className='WelcomeComponent'>
      <h1>Welcome Component</h1>
      <div>Welcome Emmanuel</div>
      <div>Manage your todos <Link to="/todos">here</Link></div> 
      {/* Link allows us to navigate to a different route without a page refresh. */}
    </div>;
 }

  function ErrorComponent() {
    return <div className='ErrorComponent'>
      <h1>Error Component</h1>
      <p>An Error Occurred. Contact support at</p>
      <a href="mailto:ndehemmanuel2409@gmail.com">ndehemmanuel2409@gmail.com</a>
    </div>;
  }

    function ListTodosComponent() {

      const today = new Date();
      const dateLine = new Date(today.getFullYear()+3, today.getMonth(), today.getDate());

      const todos = [
        { id: 1, description: 'Learn React', done: false, dateLine: dateLine },
        { id: 2, description: 'Learn Spring Boot', done: false, dateLine: dateLine },
        { id: 3, description: 'Learn AI', done: false, dateLine: dateLine },
        { id: 4, description: 'Learn Data Science', done: false, dateLine: dateLine },
      ];

      return <div className='ListTodosComponent'>
        <h1>Things You Want To Do </h1>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Description</th>
              <th>Is Completed?</th>
              <th>Dateline</th>
            </tr>
          </thead>
          <tbody>
            {todos.map(todo => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                <td>{todo.dateLine.toDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>;
    }