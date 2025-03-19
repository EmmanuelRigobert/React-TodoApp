function ListTodosComponent() {
  const today = new Date();
  const dateLine = new Date(today.getFullYear() + 3, today.getMonth(), today.getDate());

  const todos = [
    { id: 1, description: 'React learnen', done: false, dateLine: dateLine },
    { id: 2, description: 'Spring Boot lernen', done: false, dateLine: dateLine },
    { id: 3, description: 'KI lernen', done: false, dateLine: dateLine }
  ];

  return (
    <div className='container'>
      <h1>Aufgaben, die Sie erledigen möchten </h1>
      <table className='table'>
        <thead>
          <tr>
            <th>Ausweis</th>
            <th>Beschreibung</th>
            <th>Ist abgeschlossen?</th>
            <th>Stichtag</th>
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