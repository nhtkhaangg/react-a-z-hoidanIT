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

  return (
    <>
    < Header/>
    < Outlet/>
    < Footer/>
    </>
  )
}

export default App
