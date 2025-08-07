import logo from './logo.svg';
import './App.css';
import {Routes , Route} from "react-router-dom";
import Register from './component/Register';
import Edit from './component/Edit';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path="/edit/:id" element ={<Edit/>}/>

      </Routes>
    </div>
  );
}

export default App;
