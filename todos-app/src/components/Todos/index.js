import {useState} from 'react'
import "./styles.css";

function Todos() {
const [todos, setTodos] = useState([
    { id:1, text:"Learn JavaScript", completed: true },
    { id:2, text:"Learn React", completed: false},
    { id:3, text:"Have a life!", completed: false},
]);

const [newTodo, setNewTodo] = useState("");
const [filter, setFilter] = useState("all"); //all, active, completed


//Yeni todo ekleme

const handleSubmit = (e) => {
    e.preventDefault();
    if(newTodo.trim() === "") return;
    setTodos([
        ...todos,
        { id: Date.now(), text: newTodo.trim(), completed: false },
    ])
    setNewTodo("");
}

// Toplu tamamla 
const toggleAll = () => {
  const allCompleted = todos.every((todo) => todo.completed);
  setTodos(todos.map((todo) => ({ ...todo, completed: !allCompleted })));
};


// Tamamlandı işaretleme

const toggleTodo = (id) => {
    setTodos(
        todos.map((todo) =>
            todo.id === id ? {...todo, completed: !todo.completed } : todo
        )
    )
}

//Todo silme

const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
}

//Tamamlananları sil

const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
}

// Filtrelenmiş todolar

const filteredTodos = filter === "all" ? todos : filter === "active" 
? todos.filter((todo) => !todo.completed) : todos.filter((todo) => todo.completed);

  return (
    <div>
      <section className="todoapp">
	  <header className="header">
		<h1>todos</h1>
		<form onSubmit={handleSubmit}>
			<input className="new-todo"
             placeholder="What needs to be done?"
             autoFocus 
             value={newTodo}
             onChange={(e) => setNewTodo(e.target.value)}  
            />
		</form>
	</header>
	
    {todos.length > 0 && (
       <section className="main">
		<input 
             className="toggle-all"
             type="checkbox"
             id="toggle-all"
             checked={todos.length > 0 && todos.every((t) => t.completed)}
             onChange={toggleAll}
        />
		<label htmlFor="toggle-all">
			Mark all as complete
		</label>

		<ul className="todo-list">
         {filteredTodos.map((todo) => (
            <li key={todo.id} className={todo.completed ? "completed" : ""}>
				        <div className="view">
					     <input 
                            className="toggle" 
                            type="checkbox" 
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)} 
                            />
					<label>{todo.text}</label>
					<button 
                         className="destroy"
                         onClick = {() => deleteTodo(todo.id)}
                         ></button>
				</div>
			</li>
         ))}
		</ul>
	</section>
    )}
	

	<footer className="footer">
		<span className="todo-count">
			<strong>
                {todos.filter((todo) => !todo.completed).length}
            </strong>
            {" "}
			items left
		</span>

		<ul className="filters">
			<li>
				<a href="#/" 
                className={filter === "all" ? "selected" : ""}
                onClick={()=> setFilter("all")}
                >All</a>
			</li>
			<li>
				<a href="#/"
                className={filter === "active" ? "selected" : ""}
                onClick={() => setFilter("active")}
                >Active</a>
			</li>
			<li>
				<a href="#/"
                className={filter === "completed" ? "selected" : ""}
                onClick={() => setFilter("completed")}
                >Completed</a>
			</li>
		</ul>

		<button className="clear-completed" onClick={clearCompleted}>
			Clear completed
		</button>
	</footer>
</section>

<footer className="info">
	<p>Click to edit a todo</p>
	<p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
	<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
</footer>
    </div>
  )
}

export default Todos;
