import { useEffect, useState } from 'react';
import './design.css';
// s
import React from 'react';


const App = () =>
{
  const [item, setItem] = useState([]);
  const getCovidData = async () =>{
    try{
      const res = await fetch("https://covid-19-tracking.p.rapidapi.com/v1", {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": "5d37bbaac7msh7d4c46d6c9b3332p1e0a3cjsn98c5589a3333",
          "x-rapidapi-host": "covid-19-tracking.p.rapidapi.com"
        }
      });
      // fetch('https://corona.askbhunte.com/api/v1/data/world  ');
      const actualData = await res.json();
      setItem(actualData[43]);
      // console.log(actualData[43]);

    }
    catch(error) {

    }
  }
  useEffect(() =>{
    getCovidData();
  
  },[] );
  return(
<div>
<>
     
     <div className="tophead">
      <h1>Nepal 🔴 Live Covid Tracker</h1>

      </div>
    <div className="container">
     
 
    <div className = "cardbox">

<div className="heading">
<h3>
Total Cases
  </h3>
</div>
<h5> {item.["Total Cases_text"]} </h5>
</div>

<div className = "cardbox">

<div className="heading">
<h3>
  Active Cases
  </h3>
</div>
<h5> {item.["Active Cases_text"]}</h5>
</div>
<div className = "cardbox">

<div className="heading">
<h3>
 New Cases
  </h3>
</div>
<h5> {item.["New Cases_text"]}</h5>
</div>
<div className = "cardbox">

<div className="heading">
<h3>
  New Deaths
  </h3>
</div>
<h5> {item.["New Deaths_text"]}</h5>
</div>
<div className = "cardbox">

<div className="heading">
<h3>
  Total Recovered
  </h3>
</div>
<h5>{item.["Total Recovered_text"]}</h5>
</div>
<div className = "cardbox">

<div className="heading">
<h3>
  Total Death
  </h3>
</div>
<h5> {item.["Total Deaths_text"]} </h5>
</div>
<div className = "cardbox">

<div className="heading">
<h3>
  Last Updated
  </h3>
</div>
<h5> {item.["Last Update"]}</h5>
</div>





    </div>
    <div className="footer">
      Made By Rohan with ❤️
    </div>
     </>

</div>

  )

}
export default App;