import Home from "./home";
import Navbar from "./nav";
import  { BrowserRouter, Route, Routes } from 'react-router-dom';
import Post from "./post";
import Details from "./details";
import About from "./about";
import Thanks from "./thanks";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/post" element={ <Post /> } />
        <Route path="/details/:id" element={<Details/>} />
        <Route path="/about" element={<About />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
