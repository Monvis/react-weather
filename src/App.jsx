import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/components/Home';
import { MonthStatistics } from './pages/MonthStatistics/components/MonthStatistics';
import { Header } from './shared/Header/Header';
import './styles/index.scss';

function App() {


  const viewportHeight = window.innerHeight;
  document.querySelectorAll('*').forEach(el => {
  const rect = el.getBoundingClientRect();
  if (rect.bottom > viewportHeight || rect.top < 0) {
    el.style.outline = '2px solid red'; // подсветка красным
  }
  });


  return (
    <div className='container'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/month-statistics' element={<MonthStatistics />} />
        </Routes>
    </div>
  )
}

export default App