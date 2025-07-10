import './components/learn/todo/todo.css';
import TodoData from './components/learn/todo/TodoData';
import TodoNew from './components/learn/todo/TodoNew';
import reactLogo from './assets/react.svg'
import { useState } from 'react';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { Outlet } from 'react-router-dom';


//compoment viết hoa chữ cái đầu tiên
const App = () => {

  const [todoList, setTodoList] = useState([
    // {id: 1, name: "Learning React"},
    // {id: 2, name: "Watching Youtube"}

  ])




  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 10000000),
      name: name
    }
    setTodoList([...todoList, newTodo])

  }



  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // Xoá phần tử theo Id
  const deleteTodo = (id) => {
    const newTodo = todoList.filter(item => item.id !== id)
    setTodoList(newTodo);
  }


  // Object => {key: value}
  return (
    <>
    < Header/>
    <div className='todo-container'>Hello Word
      <div className='todo-title'>Todo List</div>

      <TodoNew
        addNewTodo={addNewTodo}
      />


      {todoList.length > 0 ?
        <TodoData
          todoList={todoList}
          deleteTodo = {deleteTodo}
        />
        :
      <div className="todo-image">
        {/* này là biến số: {} */}
        <img className='logo' src={reactLogo} />

      </div>
      }

    </div>
    < Outlet/>
    < Footer/>
    </>
  )
}

export default App
