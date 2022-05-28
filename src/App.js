import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Navbar from './Components/Navbar';


function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div>
     <Navbar />
    </div>
   
  );
}

export default App;
