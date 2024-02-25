import { useSelector } from 'react-redux';
import './App.css';
import Home from './pages/Home';
import { useNavigate } from 'react-router-dom';
import Login from './pages/Login';



function App() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);
  console.log(user)

  return (
    <div>
         <Home />
    </div>
  );
}

export default App;
