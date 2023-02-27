
import './App.css';
import Pokemon from './components/page/Pokemon';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {

    return (
      <div>
        <Navbar/>
      <div className="App">
   
        <BrowserRouter>
      <Routes>
         <Route path="/" element={<Pokemon/>}>
        </Route>
      </Routes>
    </BrowserRouter>
       
      </div>
      </div>
    );
}


