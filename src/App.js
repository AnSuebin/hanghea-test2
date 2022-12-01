import { useState } from "react";
import "./App.css";

function App() {
  const [context, setContext] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [key, setKey] = useState(1);

  const addList = (e) => {
    e.preventDefault();
    if (context !== "") {
      let todo = { key: key, context: context };
      setTodoList([...todoList, todo]);
      console.log(todoList);
      setContext("");
      setKey(key + 1);
    } else {
      alert("값을 입력해주세요!");
    }
  };

  return (
    <div className="App">
      <div className="app-container">
        <form className="form">
          <input
            type="text"
            id="context"
            placeholder="할일을 적어보세요"
            onChange={(e) => setContext(e.target.value)}
            value={context || ""}
          ></input>
          <button onClick={addList}>추가하기</button>
        </form>
        <h2>TodoList</h2>
        <div className="todo-container">
          {todoList &&
            todoList.map(({ key, context }) => {
              return (
                <div key={key} className="todo">
                  {context}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
