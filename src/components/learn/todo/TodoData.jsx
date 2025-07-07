const TodoData = (props) => {

  const { todoList } = props;
  return (
    <div className="todo-data">

      {todoList.map((item, index) => {
        return (
        <div className={`todo-item`} key={item.id}>
          <div>{item.name}</div>
        <button>Delete</button>
        </div>)
      })}







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
