import { Route, Routes } from 'react-router-dom';
import { Home, SignIn, SignUp, Todo } from './pages';
import { useCheckToken } from './hooks';

function App() {
  useCheckToken();
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/todo' element={<Todo />} />
    </Routes>
  );
}

export default App;
