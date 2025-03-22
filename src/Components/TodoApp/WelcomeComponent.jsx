import { Link, useParams } from 'react-router-dom';

function WelcomeComponent() {
  const { username } = useParams(); // useParams is a hook that allows you to access the parameters in the URL of the current route.
      
  return (
    <div className='WelcomeComponent'>
      <h1>Willkommenskomponente</h1>
      <div>Willkommen {username}</div>
      <div>
        Verwalten Sie <Link to='/todos'>hier</Link> Ihre Aufgaben
      </div>
      {/* Link allows us to navigate to a different route without a page refresh. */}
      <div>
      </div>
    </div>
  );
}

export default WelcomeComponent;