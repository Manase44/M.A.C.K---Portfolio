import "../src/assets/global.css"
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'
import { Home } from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import Work from './Pages/Work/Work';

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/work' element={<Work/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
