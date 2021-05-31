import MyTodoList from '../MyTodoList/MyTodoList';
import classes from './App.module.scss';
import React, { useState, useContext } from 'react'
import ThemeContext from '../../context.js'

function App() {
  const { theme, setTheme } = useContext(ThemeContext)
  const [check, setCheck] = useState(false)
  
  const change = () => {
    setTheme(theme === 'appLight' ? 'appDark' : 'appLight')
    setCheck(!check)
  }
  return (
    <div className={check ? classes.appLight : classes.appDark}>
      <h1 className={classes.app__title}>Hello and Welcome! This is the Task Tracker!</h1>
      <div className={classes.changeTheme}
        onClick={()=>change()} >Chagne theme to {check ? 'dark' : 'light'} </div>
      <MyTodoList />
    </div>
  );
}

export default App;
