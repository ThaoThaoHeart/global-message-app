import { Route, Routes } from 'react-router-dom'


import Navbar from './Navbar'
import Home from './Home'
import AnotherPage from './AnotherPage'

import Messages from './Messages'

const App = () => {
  
  return (
    <>
    <Messages/>
      <Navbar/>
      <Routes>
        <Route path='' element={ <Home/> } />
        <Route path='another-page' element={ <AnotherPage/> } />
      </Routes>
    </>
  )
}

export default App;
