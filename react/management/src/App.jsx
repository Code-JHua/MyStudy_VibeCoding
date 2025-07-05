import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import Login from './views/login/index.jsx';
import Layout from './views/layout/index.jsx';
import Home from './views/home/index.jsx'
import Public from './views/public/index.jsx'
import Score from './views/score/index.jsx'

import './App.css'

function App() {


    return (
        <div className='app'>
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/layout' element={<Layout />}>
                        <Route path='home' element={<Home />}></Route>
                        <Route path='public' element={<Public />}></Route>
                        <Route path='score' element={<Score />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;