import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Table from 'react-bootstrap/Table';

const App=()=>{

const [data,setData]=useState([]);

const getCryptoData=async()=>{
const res=await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false");
const actualData=await res.json();
// console.log(actualData);
setData(actualData);
}


useEffect(()=>{
  getCryptoData();
})




  return(
    <>
<div className="container-fluid m-5">
<h1 className="text-center"><span className="text">Cryptocurrency</span> Tracker</h1>
</div>
<div className="container">
<div className="row text-center">
      <div className="col-16 m-auto p-0 shadow-lg tb">  
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Image</th>
          <th>Symbol</th>
          <th>Name</th>
          <th>Current Price</th>
          <th>Market Capital</th>
          <th>Updated Date</th>
        </tr>
      </thead>
      <tbody>
{
  data.map((currency,index)=>
  (
    <tr key={index}>
        <td>{currency.market_cap_rank}</td>
          <td><img src={currency.image} alt={currency.image}/></td>
          <td>{currency.symbol}</td>
          <td>{currency.name}</td>
          <td>{currency.current_price.toLocaleString()}</td>
          <td>$ {currency.market_cap.toLocaleString()}</td>
          <td>{currency.last_updated}</td>
        </tr>

  ))
}
   
      </tbody>
    </Table>
    </div>
    </div>
</div>

    </>
  )
}

export default App;