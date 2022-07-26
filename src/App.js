import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Profile from './Pages/Profile/Profile';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ContextProvider} from './context'

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/profile' element={<Profile/>}/>
          </Routes>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
