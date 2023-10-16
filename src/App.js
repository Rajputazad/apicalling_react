import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Get from "./components/get";
import Post  from "./components/post";
import Update from "./components/update";
function App() {

  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" exact  element={<Post/>} />
      <Route path="/get" exact  element={<Get/>} />
      <Route path="/update/:id" exact  element={<Update/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
