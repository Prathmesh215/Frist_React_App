import { useState } from 'react'

function App() {

  var isDone = true;
  function Strick() {
    document.getElementById("root").style.textDecorationLine = "line-through";
  }

  function rmStrick() {
    document.getElementById("root").style.textDecorationLine = null;
  }

  return <div>
    
      <p >Buy millk</p>
      {/* Way first */}
      <button onClick={Strick} >click to strick</button>
      <button onClick={rmStrick}>Remove strick</button>
      {/* Way Second */}
      <p style={isDone ? {textDecorationLine : "line-through"} : null} >Buy Laptop</p>
    </div>

     
}

export default App
