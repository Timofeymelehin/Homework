import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import ThemeContext from './context';
import './styles.css';

function ChangeTheme() {
  const [theme, setTheme] = useState('appLight')
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <App />
    </ThemeContext.Provider>
  )
}

ReactDOM.render(
  <ChangeTheme />,
  document.getElementById('root')
);

