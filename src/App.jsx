import './components/learn/todo/todo.css';
import TodoData from './components/learn/todo/TodoData';
import TodoNew from './components/learn/todo/TodoNew';
import reactLogo from './assets/react.svg'


//compoment viết hoa chữ cái đầu tiên
const App = () => {

  const Khaangdev = "Khaang";
  const age = 21;
  const data = {
    address: 'HoChiMinh',
    country: 'VietNam'
  }

  // Object => {key: value}
  return (

    <div className='todo-container'>Hello Word
      <div className='todo-title'>Todo List</div>

    <TodoNew />
    <TodoData 
    name = {Khaangdev}
    age = {age}
    data = {data}
    />


    <div className="todo-image">
      {/* này là biến số: {} */}
      <img className='logo' src= {reactLogo} />

    </div>

    </div>
  )
}

export default App
