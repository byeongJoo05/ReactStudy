
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Form from './components/Form';
import List from './pages/List';
import PendingParent from './pages/PendingParent';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path='/list' element={<List/>}/>
          <Route path='/pending' element={<PendingParent/>}/>
        </Routes>
    </div>
  );
}

export default App;
