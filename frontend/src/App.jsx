import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Counter from './components/Counter';
import Effect1 from './components/13-09/Effect1';
import Effect2 from './components/13-09/Effect2';
import Effect3 from './components/15-09/Effect3';
import Effect4 from './components/15-09/Effect4';
import Params from './components/15-09/Params';
import SingleProduct from './components/15-09/SingleProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/counter' element={<Counter />} />
        <Route exact path='/effect1' element={<Effect1 />} />
        <Route exact path='/effect2' element={<Effect2 />} />
        <Route exact path='/effect3' element={<Effect3 />} />
        <Route exact path='/effect4' element={<Effect4 />} />
        <Route exact path='/params' element={<Params />} />
        <Route exact path='/singleProduct/:id/:name' element={<SingleProduct />} />
      </Routes>
    </div>
  );
}

export default App;
