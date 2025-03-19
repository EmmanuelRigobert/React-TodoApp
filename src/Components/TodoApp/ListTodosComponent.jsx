function ListTodosComponent() {
  const today = new Date();
  const dateLine = new Date(today.getFullYear() + 3, today.getMonth(), today.getDate());

  const todos = [
    { id: 1, description: 'Learn React', done: false, dateLine: dateLine },
    { id: 2, description: 'Learn Spring Boot', done: false, dateLine: dateLine },
    { id: 3, description: 'Learn AI', done: false, dateLine: dateLine },
    { id: 4, description: 'Learn Data Science', done: false, dateLine: dateLine },
  ];

  return (
    <div className='container'>
      <h1>Things You Want To Do </h1>
      <table className='table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Description</th>
            <th>Is Completed?</th>
            <th>Dateline</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.description}</td>
              <td>{todo.done.toString()}</td>
              <td>{todo.dateLine.toDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListTodosComponent;