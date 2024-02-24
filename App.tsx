import React from 'react';
import './App.css';
import DropDownButton from './Dropdownbutton';
import { useState } from 'react';



function App() {



  const[openDropButton,setOpenDropButton]=useState(false);

  
  return (
    <div className="App">
      <div className="body">
        <div className="HeaderText">
         <h1 className="PageTitle">The PWR Chain Explorer</h1>
        </div>

        <div className="Search">
          <form className="SearchBar">
          <button className="dropdown" onClick={() => setOpenDropButton(prev => !prev)} >ALL Filters
              {/* Toggle dropdown button */}
              {openDropButton && <DropDownButton /> }
            </button>
            
            <input type='text' placeholder='Search by Address / Txn Hash / Block / Token / Domain Name' ></input>
            <button type='submit'>Enter</button>
            

          </form>

        </div>
        <div className="InfoFrame">
          <div className="PwrPriceGrid">
            <img className='infologo' src='../public/pwr.png'></img>
            <p className='pInfo'>PWR Price</p>
            <div className='pwrPriceNum'>
            <p className='numInfo'>$1.098</p>
            <p className='percentage'>(-4.19%)</p>
            </div>

          </div>
          <div className='transactionsGrid'></div>
          <div className='MarketCapGrid'>
          <img className='globe' src='.\technical-interview\public\globe.png'></img>
          <p className='pInfo2'>PWR Market Cap</p>
          <p className='numInfo'>$1,000,000,00..</p>

          
          </div>
          <div className='BlocksGrid'></div>
          <div className='ValidatorsGrid'></div>
          <div className='transactionHistoryGrid'></div>

        </div>
         
        <div className="LatestFrame"></div>
      </div>
    </div>
  );
}

export default App;
