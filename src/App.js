import './App.css';
import './assets/scss/main.scss';

import HeaderComponents from './components/header';
import SidebarComponents from './components/sidebar';

import TestPage from './pages/TestPage';

function App() {
  return (
    <div className="App">
      <HeaderComponents />
      <SidebarComponents />

      <div className="content">
        <TestPage />
      </div>
    </div>
  );
}

export default App;
