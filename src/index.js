import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import CreatePost from './CreatePost';
import Posts from './Posts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
    <Route path='/' element={ <App />} />
    <Route path='/create' element={ <CreatePost />} />
    <Route path='/create/posts' element={ <Posts />} />


    </Routes>
  </BrowserRouter>



);
