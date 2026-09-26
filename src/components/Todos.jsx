const Todos = () => {
    const todos = [
        { task: "Coding", id: crypto.randomUUID() },
        { task: "Watching netflix", id: crypto.randomUUID() },
        { task: "Learning React!", id: crypto.randomUUID() },
    ];

    const months = ['Janauary', 'Febrauray', 'March', 'April']
  return (
    <div className="max-w-7xl py-12 px-8">
        <h1 className="text-2xl">Todos</h1>
        <ul>
        {todos.map((todo) => (
            <li key={todo.id}> {todo.task}</li>
        ))}
        {months.map((month, index) => (
            <li key={index}>{month}</li>
        ))} 
    </ul>
    </div>
  )
}

export default Todos