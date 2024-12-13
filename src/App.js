import Home from "./home";
import  { BrowserRouter, Route, Routes } from 'react-router-dom';
import Post from "./post";
import Details from "./details";
import About from "./about";
import Thanks from "./thanks";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/post" element={ <Post /> } />
        <Route path="/details/:id" element={<Details/>} />
        <Route path="/about" element={<About />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
