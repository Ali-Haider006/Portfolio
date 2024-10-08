{// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
}
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Service } from './pages/Service';
import Navbar from './components/Navbar';
import { Error } from './pages/Error';
import { Footer } from './components/Footer';
import Logout from './pages/Logout';
const App = () =>{
  return(
  <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
   <Route path="/" element ={  <Home/>}/>
   <Route path="/about" element ={<About/>}/>
   <Route path="/contact" element ={<Contact/>}/>
   <Route path="/register" element ={<Register/>}/>
   <Route path="/login" element ={<Login/>}/>
   <Route path="/service" element ={<Service/>}/>
   <Route path="/logout" element ={<Logout/>}/>
   <Route path="*" element ={<Error/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
  </>);
};
export default App;