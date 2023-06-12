import { useState } from "react";
import "./App.css";
import FilmsList from "./components/FilmsList";

function App() {
  const [list, setList] = useState(["ready", "set", "GO"]);
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault()

    setList([...list, text])
    //setList(["ready", "set", "GO", "banana", text])
  }


    return (
      <div>
        <h1>Hello Mars!</h1>
        <FilmsList />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(event) => 
              setText(event.target.value)
              }/>
          <button type="submit">Add</button>
        </form>
        <ul>
          {list.map((item, idx) => {
            return <li key={item + idx}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }

export default App;