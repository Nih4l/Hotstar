import { Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtecctedRoute from "./components/ProtecctedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
    <AuthContextProvider>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/account' element={<ProtecctedRoute><Account /></ProtecctedRoute>} /> 
    </Routes>
    </AuthContextProvider>
    <Footer />
    </>
    
    
  );
}

export default App;
