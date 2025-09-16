import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Search from './pages/Search';
import KeepAlive from './KeepAlive';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/home">首页</Link>
        <Link to="/about">关于</Link>
        <Link to="/search?q=react">搜索react</Link>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

