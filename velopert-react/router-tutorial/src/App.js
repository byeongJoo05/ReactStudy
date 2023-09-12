import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Article from './components/Article';
import Articles from './components/Articles';
import Layout from './layouts/Layout';

import Login from './components/Login';
import MyPage from './components/MyPage';

import NotFound from './components/NotFound';

function App() {
  return (
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/profiles/:username" element={<Profile/>}/>
        </Route>
        <Route path="/articles" element={<Articles/>}>
          <Route path=":id" element={<Article/>}/>
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
  );
}

export default App;
