import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, SignIn, SignUp, Todo } from './pages';

//errorBoundary
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/todo' element={<Todo />} />
      </Routes>
    </Router>
  );
}

export default App;
