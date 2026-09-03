import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  const addTodo = (event) => {
    event.preventDefault();

    const text = todoText.trim();

    if (!text) {
      return;
    }

    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        text,
        completed: false,
      },
    ]);
    setTodoText("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <main className={styles.page}>
      <section className={styles.card} aria-labelledby="todo-title">
        <h1 id="todo-title" className={styles.title}>
          My Todo List
        </h1>

        <form className={styles.form} onSubmit={addTodo}>
          <input
            className={styles.input}
            type="text"
            value={todoText}
            onChange={(event) => setTodoText(event.target.value)}
            placeholder="Add a new todo..."
            aria-label="New todo"
          />
          <button className={styles.addButton} type="submit">
            Add
          </button>
        </form>

        <ul className={styles.list}>
          {todos.map((todo) => (
            <li
              className={`${styles.item} ${
                todo.completed ? styles.completedItem : ""
              }`}
              key={todo.id}
            >
              <label className={styles.todoLabel}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span className={todo.completed ? styles.completedText : ""}>
                  {todo.text}
                </span>
              </label>

              {todo.completed && (
                <button
                  className={styles.deleteButton}
                  type="button"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              )}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
