import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Room from './pages/Room.jsx'

const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/room/:roomId' element={<Room/>}/>
        </Routes>
    </div>
  )
}

export default App