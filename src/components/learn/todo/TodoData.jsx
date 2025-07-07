const TodoData = (props) => {

  const { todoList } = props;
  console.log(">>> check props: ", todoList);
  return (
    <div className="todo-data">
      
      {todoList.map((item, index) => {
        return (
        <div className="todo-item">
          <div>{item.name}</div>
        <button>Delete</button>
        </div>)
      })}


      <div>
        {JSON.stringify(props.todoList)}
      </div>





      <div>
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
          {props.todoList.map((item, index) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default TodoData;
