import { Routes,Route } from 'react-router-dom';
import './App.css';
import ItemPage from './Pages/ItemPage';
import SalesPage from './Pages/SalesPage';
import LinksPage from './Pages/LinksPage';
import ReportsPage from './Pages/ReportsPage';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="w-full text-center flex justify-between">
      <Nav/>
      <div className='w-full'>
     <Routes>
      <Route path="/" element={<ItemPage/>}/>
      <Route path="/sales" element={<SalesPage/>}/>
      <Route path="/reports" element={<ReportsPage/>}/>
      <Route path="/links" element={<LinksPage/>}/>
     </Routes>
     </div>
    </div>
  );
}

export default App;
