import Home from "./home";
import  { Route, Routes } from 'react-router-dom';
import Post from "./post";
import Details from "./details";
import About from "./about";
import Thanks from "./thanks";
import Error from "./error";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/post" element={ <Post /> } />
        <Route path="/details/:id" element={<Details/>} />
        <Route path="/about" element={<About />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
