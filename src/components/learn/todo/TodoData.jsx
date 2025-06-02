const TodoData = (props) => {
  //Props là một biến Object
  // {
        // name: "Khaang",
        // age: 21,
        // data: {}
  //}

  const {name, age, data} = props;
  console.log(">>> check props: ", props);
  return (
    <div className="todo-data">
      <div>My Name is {name} </div>
      <div>Learning React</div>
      <div>Watching Youtube</div>
      <div>
        {JSON.stringify(props.todoList)}
      </div>
    </div>
  );
};

export default TodoData;
