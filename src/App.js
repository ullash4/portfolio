import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Home from './Components/Home';
import Navbar from './Components/Navbar';



function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div>
      <Navbar />
    <Home />
  
    </div>
   
  );
}

export default App;
