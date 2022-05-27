import React, { useState } from "react";
import "./index.css"


const App = () => {  

    const[inputlist,setList] = useState("");
    const[items,setitems] = useState([])

    const inputevent = (event) =>{
      setList(event.target.value)
    };

    const listofitems = () =>{
       setitems((olditems) => {
          return [...olditems,inputlist];
       });
       setList("");
    };
     return <>
    <div className="main_div">
        <div className="center_div">
            <br />
            <h1> ToDo List</h1>
            <br />
            <input type="text" placeholder="Add a Item" value={inputlist} onChange={inputevent}/>
             <button onClick={listofitems}> + </button>


             <ol>
                 {
                 items.map((itemval) => {
                     return  <li>{itemval}</li>
                 })
                 }
             </ol>
        </div>
    </div>
</>;
};

export   default App;