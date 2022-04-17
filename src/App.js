import { Route, Routes } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Shared/Header/Header';
import './App.css'
import CheckOut from './Pages/CheckOut/CheckOut';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
