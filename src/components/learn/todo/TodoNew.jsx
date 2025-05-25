const TodoNew = (props) => {

    console.log (">>>check point: ", props)
const {addNewTodo} = props;
// addNewTodo("Khaang");
  return (
    <div className="toto-new">
      <input type="text" />
      <button>Add</button>
    </div>
  );
};

export default TodoNew;