import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Registration from "./pages/registration/Registration";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Messenger from "./pages/messenger/Messenger";


function App() {

    const {user} = useContext(AuthContext)

    return(
        <Router>
          <Routes>
              <Route path="/" element={
                user ? <Home /> : <Registration/>
                }/>
              <Route path="/login" element={
                user ? <Navigate to="/" /> : 
                <Login />
                }/>
              <Route path="/registration" element={
                  // user ? <Navigate to="/" /> : 
                  <Registration />
                }/>
              <Route path="/profile/:username" element={ <Profile /> }/>
              <Route path="/messenger" element={ <Messenger /> }/>
          </Routes>
      </Router>
    )
}

export default App;
