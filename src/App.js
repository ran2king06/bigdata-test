import './App.css';
import './assets/scss/main.scss';

import HeaderComponents from './components/header';
import SidebarComponents from './components/sidebar';
import TableDummy from './components/tableDummy';

function App() {
  return (
    <div className="App">
      <HeaderComponents />
      <SidebarComponents />

      <div className="content">
        <h1>Dashboard</h1>
        <TableDummy />

      </div>
    </div>
  );
}

export default App;
