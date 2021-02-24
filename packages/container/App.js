import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from '../container/components/Header';

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <MarketingApp/>
      </div>
    </BrowserRouter>    
  )
}
