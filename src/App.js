import './App.css';
import './assets/scss/main.scss';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react';

import HeaderComponents from './components/header';
import SidebarComponents from './components/sidebar';
import TestPage from './pages/TestPage';

function App() {
  const [date, setDate] = useState(['', '']);

  const onChange = (value) => {
    setDate(value);
  }


  return (
    <div className="App">
      <HeaderComponents onChange={onChange} />
      <SidebarComponents />

      <div className="content">
        <TestPage dateRange={date} />
      </div>
    </div>
  );
}

export default App;
