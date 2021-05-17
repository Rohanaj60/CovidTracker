import React, { useEffect, useState } from 'react';



function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("https://data.askbhunte.com/api/v1/world")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
          
        <>
     
        <div className="tophead">
         <h1>Live Covid Tracker</h1>
   
         </div>
       <div className="container">
        
    
       <div className = "cardbox">
   
   <div className="heading">
   <h3>
   {items[2].cases}
     </h3>
   </div>
   <h5> 0000000</h5>
   </div>
   
   <div className = "cardbox">
   
   <div className="heading">
   <h3>
     Total Recovered
     </h3>
   </div>
   <h5> 0000000</h5>
   </div>
   <div className = "cardbox">
   
   <div className="heading">
   <h3>
     Total Death
     </h3>
   </div>
   <h5> 0000000</h5>
   </div>
   <div className = "cardbox">
   
   <div className="heading">
   <h3>
     Last Updated
     </h3>
   </div>
   <h5> 0000000</h5>
   </div>
   
   
   
   
   
       </div>
        </>
      );
    }
  }
  export default App;