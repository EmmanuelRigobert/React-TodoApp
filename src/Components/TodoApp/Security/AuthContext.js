

import { createContext, useState, useContext } from 'react';

//Create a context for the authentication state which will be used to determine if a user is logged in or not. The context will be used to pass the authentication state to all components that need it.

const AuthContext = createContext();

export const useAuth = () => { //We use the useAuth hook to access the created context
  return useContext(AuthContext); //The useContext hook is used to access the context created
}


function AuthProvider({ children }) { //We use the AuthProvider to provide the created context to all Components
  //The AuthProvider component will be used to wrap the other Components of the application in the TodoApp.jsx file. This will allow the authentication state to be available to all components in the application.
  // const [number, setNumber] = useState(10);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [username, setUsername] = useState(null);

  // setInterval(() => setNumber(number + 1), 10000);
  
  function login(username,password){
    if(username === 'emmanuel' && password === 'password'){
      setIsAuthenticated(true);
      setUsername(username);
      return true;
    }else{
      setIsAuthenticated(false);
      setUsername(null);
      return false;
    }
  }

  function logout(){
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, username }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
export { AuthContext };