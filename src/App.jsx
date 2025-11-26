import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import NavBar from './components/NavBar'


function App() {
  
  return (
    <div>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='*' element={<h2>Page not found</h2>} />
        </Routes>
      </main>
   </div>
   
  )
}


/*
function Text({string}) {
  return (
    <div>
      <h1>{string}</h1>
    </div>
  )
}

function Component() {
  return (
    //<div></div>//need to be a parent can't have more than one parent div in the return statement
    //using fragment you can solve the issue
    <>
      <div></div>
      <div></div>
    </>
  )
}*/

export default App
