import { useState } from "react";

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
    <main className="grid min-h-screen place-items-center bg-[#ebe5ff] p-6 text-[#273140]">
      <section
        className="w-full max-w-[440px] rounded-[10px] bg-white px-8 py-7 pb-9 shadow-[0_14px_28px_rgb(44_37_84_/_0.12)] max-[460px]:px-[18px] max-[460px]:py-6 max-[460px]:pb-7"
        aria-labelledby="todo-title"
      >
        <h1
          id="todo-title"
          className="mb-[26px] mt-0 text-center text-[30px] font-bold leading-[1.1] text-[#273140]"
        >
          My Todo List
        </h1>

        <form
          className="mb-5 grid grid-cols-[1fr_78px] gap-2 max-[460px]:grid-cols-1"
          onSubmit={addTodo}
        >
          <input
            className="h-[42px] min-w-0 rounded-lg border border-[#d7d9e0] px-3.5 text-[#273140] shadow-[inset_0_1px_3px_rgb(26_31_44_/_0.08)] outline-none placeholder:text-[#8a8d95] focus:border-[#8d1ff2] focus:shadow-[0_0_0_3px_rgb(141_31_242_/_0.14)]"
            type="text"
            value={todoText}
            onChange={(event) => setTodoText(event.target.value)}
            placeholder="Add a new todo..."
            aria-label="New todo"
          />
          <button
            className="h-[42px] cursor-pointer rounded-lg border-0 bg-[#9418ed] font-bold text-white shadow-[0_4px_10px_rgb(148_24_237_/_0.24)] hover:bg-[#8515d8] max-[460px]:w-full"
            type="submit"
          >
            Add
          </button>
        </form>

        <ul className="m-0 grid list-none gap-3 p-0">
          {todos.map((todo) => (
            <li
              className={`flex min-h-[52px] items-center justify-between gap-4 rounded-lg px-3.5 text-[#303846] ${
                todo.completed ? "bg-[#f1f3f8]" : "bg-[#fbfcfe]"
              }`}
              key={todo.id}
            >
              <label className="flex min-w-0 cursor-pointer items-center gap-2.5">
                <input
                  className="h-[18px] w-[18px] flex-none cursor-pointer accent-[#2381ea]"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span
                  className={
                    todo.completed ? "text-[#8c91a0] line-through" : ""
                  }
                >
                  {todo.text}
                </span>
              </label>

              {todo.completed && (
                <button
                  className="flex-none cursor-pointer border-0 bg-transparent p-0 font-bold text-[#e33d55] hover:text-[#bf2138]"
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
