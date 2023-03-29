import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

import BlogsStaticPage_47 from './pages/BlogsStaticPage_47';
import BlogsLocalJsonPage_47 from './pages/BlogsLocalJsonPage_47'
import BlogsNodeServerPage_47 from './pages/BlogsNodeServerPage_47'
import BlogsSupabasePage_47 from './pages/BlogsSupabasePage_47'

function App_47() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/card_47' element={<BlogsStaticPage_47/>} />
        <Route path='/local_47' element={<BlogsLocalJsonPage_47/>} />
        <Route path='/node_47' element={<BlogsNodeServerPage_47/>} />
        <Route path='/supabase_47' element={<BlogsSupabasePage_47/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App_47;
