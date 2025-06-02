import './components/learn/todo/todo.css';
import TodoData from './components/learn/todo/TodoData';
import TodoNew from './components/learn/todo/TodoNew';
import reactLogo from './assets/react.svg'
import { useState } from 'react';


//compoment viết hoa chữ cái đầu tiên
const App = () => {

  const[todoList, setTodoList] = useState([
    {id: 1, name: "Learning React"},
    {id: 2, name: "Watching Youtube"}
    
  ])

  const Khaangdev = "Khaang";
  const age = 21;
  const data = {
    address: 'HoChiMinh',
    country: 'VietNam'
  }


  const addNewTodo = (name) => {
    alert(`call me ${name}`)
  }
  // Object => {key: value}
  return (

    <div className='todo-container'>Hello Word
    <div className='todo-title'>Todo List</div>

    <TodoNew 
    addNewTodo = {addNewTodo}
    />
    
    <TodoData 
    name = {Khaangdev}
    age = {age}
    data = {data}
    todoList={todoList}
    
    />


    <div className="todo-image">
      {/* này là biến số: {} */}
      <img className='logo' src= {reactLogo} />

    </div>

    </div>
  )
}

export default App
