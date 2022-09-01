import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import { useContext } from 'react';
import { SelectedContext } from './pages/Context';

const App = () => {
  const context = useContext(SelectedContext);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        {context ? (
          <>
            {context.isAdmin ? (
              <Route path='/admin' element={<Admin />} />
            ) : null}
            <Route path='/profile' element={<Profile />} />
          </>
        ) : (
          <>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
