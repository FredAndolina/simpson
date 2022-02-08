import axios from "axios";
import React, {useState,useEffect} from "react";

function App() {
const [quote, setQuote]=useState("Bonjour");
const [count, setCount]=useState(0)

useEffect (()=>{ 
  // Send the request
  axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
  .then(response =>setQuote(response.data[0]))  
    },[count])

  return (
    <div className="App">
      
<p>{quote.character}</p>
<p>{quote.quote}</p>
<img src={quote.image}></img>
<button onClick={()=>setCount(count=>count+1)}>Changer la situation</button>
    </div>
  );
}

export default App;
