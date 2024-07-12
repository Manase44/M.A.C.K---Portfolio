import {BrowserRouter, Route, Router} from 'react-router-dom';
import "../src/assets/global.css"

function App() {

  return (
    <>
     <BrowserRouter>
     <Router>
      <Route path='/' element={}/>
      <Route path='/blog' element/>
      <Route path='/contact' element/>
      <Route path='/work' element/>
     </Router>
     </BrowserRouter>
    </>
  )
}

export default App
