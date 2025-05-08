import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/components/Home';
import { MonthStatistics } from './pages/MonthStatistics/components/MonthStatistics';
import { Header } from './shared/Header/Header';
import { ThisDay } from './pages/Home/components/ThisDay/ThisDay';
import { ThisDayInfo } from './pages/Home/components/ThisDayInfo/ThisDayInfo';
import './styles/index.scss';

function App() {
  return (
    <div className='container'>
        <Header />
        <div className="flex-wrapper space-between">
          <ThisDay />
          <ThisDayInfo />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/month-statistics' element={<MonthStatistics />} />
        </Routes>
    </div>
  )
}

export default App