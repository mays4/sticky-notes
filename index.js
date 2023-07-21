function App() {
 const [isShowing, setIsShowing]= React.useState(false);
 const[add, SetAdd] = React.useState([]);
 const [value,setValue]=React.useState("");
  const [color, setColor] = React.useState("");
  const [isInitialRender, setIsInitialRender] = React.useState(true);

  let randomcolor=`#${Math.floor(Math.random() * 0x1011011).toString(16).padStart(6, 0)}`;
  let index =0;
  


  const handleClick= ()=>{
    setIsShowing(!isShowing)
  }
    
 const handleChange=(e)=>{
  setValue(e.target.value)
 }
const handleAdding=()=>{
  const list=[];
  
    list.push(<div className="squres-adding" key={index+1} style={{backgroundColor:
      `${randomcolor}`}}><p >{value}</p></div>)
  
  SetAdd([...add,list]);
  setValue("");
  
}
  return (
    <div className="app">
     <nav >
     <h1>My Sticky Notes</h1>
     </nav>
    <main >
      <div className="container">
      <div className="inside" >
       {add}

      </div>
      <div  className="inside-button">
      <button className="btn" onClick={handleClick} >+
 
      
     
    </button>
    </div>
    </div>
    <div className="sub-container">
      {isShowing && (
      <div className="note">
        <textarea type="text" placeholder="Add A note" value={value} onChange={handleChange} />
        <button className="add" onClick={handleAdding}>Add Sticky Note</button>
        </div>
        )
      }
    </div>
    </main>
      
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
