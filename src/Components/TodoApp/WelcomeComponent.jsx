import { Link, useParams } from 'react-router-dom';

function WelcomeComponent() {
  const { username } = useParams(); // useParams is a hook that allows you to access the parameters in the URL of the current route.
  console.log(username);

  return (
    <div className='WelcomeComponent'>
      <h1>Welcome Component</h1>
      <div>Welcome Emmanuel</div>
      <div>
        Manage your todos <Link to='/todos'>here</Link>
      </div>
      {/* Link allows us to navigate to a different route without a page refresh. */}
    </div>
  );
}

export default WelcomeComponent;