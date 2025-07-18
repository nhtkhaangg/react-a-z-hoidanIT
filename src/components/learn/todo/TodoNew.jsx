import { useState } from "react";

const TodoNew = (props) => {
  console.log(">>>check point: ", props);

  //useState Hook
  const [valueInput, setValueInput] = useState("Khaang")
  //biến số    //function


  const { addNewTodo } = props;
  // addNewTodo("Khaang");

  const handleClick = () => {
    addNewTodo(valueInput);
    setValueInput("");
  };
  const handleOnChange = (name) => {
    setValueInput(name)
  }

  return (
    <div className="toto-new">
      <input type="text"
        onChange={(event) => { handleOnChange(event.target.value) }}
        value={valueInput}
      />

      <button style={{ cursor: "pointer" }}
        onClick={handleClick}
      >Add</button>

      <div>
        My text input is = {valueInput};
      </div>

    </div>
  );
};

export default TodoNew;
