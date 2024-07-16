import "../src/assets/global.css"
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import Work from './Pages/Work/Work.jsx';
import { Header } from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
function App() {

  return (
    <>
   
     <BrowserRouter>
     <Header />
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/work' element={<Work/>}/>
      <Route path='/contact' element={<Home/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
