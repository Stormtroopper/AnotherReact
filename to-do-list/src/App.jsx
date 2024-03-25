import Home from './Home'
import Input from './Input'
import 'bootstrap/dist/css/bootstrap.min.css';
import To_Do_Context from './context/To_do_context';
import './App.css'
function App() {

  return (
    <>
    <To_Do_Context >
      <Home />
      <br />
      <Input />

    </To_Do_Context>
    </>
  )
}

export default App
