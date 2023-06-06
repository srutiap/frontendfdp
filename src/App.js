import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import AddEmployee from './components/AddEmployee';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import ViewEmp from './components/ViewEmp';
import Add from './components/Add';

function App() {
  return (
    <div className="App">
      {/* <hi>Welcome</hi> */}
     
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* pasting the cut values from add.jsx */}
        <Route path='/add' element={<Add data={{sname:'',age:'',pos:'',salary:''}}method='post'/>}/>

        {/* go to Add.jsx addHandler */}
        <Route path='/ch' element={<ViewEmp/>}/>
      </Routes>
    </div>
  );
}

export default App;
