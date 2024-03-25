import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx';
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Test4 from './components/Test4.jsx';
import Login from './components/Login.jsx';
import Images from './components/Images.jsx'
import Navigate from './components/Navigate.jsx';
import Newone from './components/Newone.jsx';
import studentdata from './context/StudentContext.jsx';
import { MernContext } from './context/MernContext.jsx';
import Courses from './components/Courses.jsx';
import Mern from './components/Mern.jsx';
import Fetch from './components/Fetch.jsx';
function App() {
  let student = {
    name: 'Jagdish',
    occupation: 'Janitor',
    address: "Udupi"
  }
  let images=[
    'https://images.unsplash.com/photo-1710132518941-ce1103e77cb2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1709667223400-61e55ca4a50a?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1707336668429-da6dfd6d8e83?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1705091981580-61fde359c314?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ]
  return (
    <>

      <Navigate />
      <MernContext>
        <Mern />
        <studentdata.Provider value={student}>
          <Courses />
        </studentdata.Provider>
      </MernContext>
          <Routes>
            <Route path="/" exact element={<Home />}>
            </Route>
            <Route path="/about" exact element={<About />}></Route>
            <Route path="/contact" exact element={<Contact />}></Route>
            <Route path="/circle" exact element={<Test4 />}>
              <Route path='newone' excat element={<Newone />}></Route>
            </Route>
            <Route path="/login" exact element={<Login />}></Route>
            <Route path="/fetch" exact element={<Fetch />}></Route>
            <Route path="/images" exact element={<Images />}></Route>

          </Routes>
    </>
  );
}

export default App;
