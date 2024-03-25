import { store } from './redux/store/store.js'
import { Provider } from 'react-redux'
import './App.css'
import Counting from './components/Counting.jsx'
import Colors from './components/Colors.jsx'
function App() {

  return (
    <>
    <Provider store={store}>

      <nav className='navbar navbar-expand-lg bg-info'>

        <div className="container-fluid">
          <h1 className='fs-1 text-white mx-auto'>My First Redux Application</h1>
        </div>
      </nav>
      <Counting />
      <Colors/>
    </Provider>

    </>
  )
}

export default App
