import './App.css';
import {Routes,Route} from "react-router-dom"
// import {Home} from './components/Home'
import {Todos} from "./components/Todos"
import {TodoEdit} from './components/TodoEdit'
import {TodoDesc} from './components/TodoDesc'

import {Navbar} from "./components/Navbar"

function App() {
  return (
    <div className="App">
        <br/>
      <Navbar/>     
       <br/>
      <h1>TODO App under progress</h1>
      
      <Routes>
         <Route path="/" element={ <Todos/>}></Route>
         <Route path="/todos/:edit" element={<TodoEdit/>}></Route>
         <Route path="/todos" element={<TodoDesc/>}></Route>
       </Routes>
    </div>
  );
}

export default App;
