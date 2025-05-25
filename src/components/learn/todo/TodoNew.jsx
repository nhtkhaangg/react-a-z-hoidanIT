const TodoNew = (props) => {
  console.log(">>>check point: ", props);
  const { addNewTodo } = props;
  // addNewTodo("Khaang");

  const handleClick = () => {
    alert("Click me");
  };
  const handleOnChange = (name) => {
    console.log(">>>hanleOnChange", name)
  }

  return (
    <div className="toto-new">
      <input type="text" 
      onChange={(event) => {handleOnChange(event.target.value)}}
      />

      <button style={{ cursor: "pointer" }}
      onClick ={handleClick}
      >Add</button>

    </div>
  );
};

export default TodoNew;
