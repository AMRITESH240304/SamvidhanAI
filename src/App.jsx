import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom';

import Home from './components/Home';
import LLBGPT from './components/LLBGPT';

function App() {

  return (
    <>
      <Routes>
        <Route exact path="*" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
