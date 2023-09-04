import logo from './logo.svg';
import './App.css';
import { Link, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Modal from './components/Modal';
import List from './pages/List';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/modal" element={<Modal/>}/>
          <Route path='/list' element={<List/>}/>
        </Routes>
    </div>
  );
}

export default App;
