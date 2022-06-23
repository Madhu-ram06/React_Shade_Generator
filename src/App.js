
import './App.css';
import React,{useState} from 'react';
import SingleColor from './SingleColor';
import Values from 'values.js';
/*.font{
  
  font-family: cursive;
  font-style: italic;
  font-weight: 900;
color: white;
font-size: 34px;
margin-left:40%;

}*/

function App() {
   const [color,setColor]=useState('');
  const [error,setError]=useState(false);
  const [list,setList]=useState([]);
  function handleSubmit(event){
    event.preventDefault();
    try{
      let colors=new Values(color).all(10)
      setList(colors)
    }
    catch{
      setError(true)
    }

  }
  return (
    <div className="App">
      <header className="App-header">
        <nav className='topbar'>
        <img src="C:\Users\madhu\OneDrive\Desktop\repos\shadegenerator\public\Pick Your Shade.png" alt="logo" width="45px" height="45px"></img>
        </nav>

      </header>
      <body>
         <h1>View the spectrum of shades of your chosen colour !</h1>
         <div className='form'>
             <input type="text" className={`${error?'error-textfield':'textfield'}`} value={color} onChange={(e)=>setColor(e.target.value)} placeholder="#f15025" ></input>
            <button className='submit-button' onClick={handleSubmit}>Submit</button>
         </div>
        <section className='container'>
              <section className='colors'>
                {list.map((color,index)=>{
                  return <SingleColor key={index} {...color} index={index}/>
                })}
              </section>
        </section>
      
       </body>
       </div>
  );
  }

export default App;
