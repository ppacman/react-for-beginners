import { useState } from "react";

import styles from "./Potato.module.css"
function App() {
  const [writer,setWriter] = useState("");
  const onChange =(event)=> setWriter(event.target.value)
  const [writers,setWriters] = useState([]);
 

  const onSubmit = (event) =>{
    event.preventDefault();
    if(writer ===""){
      return;
    }
    setWriters((currentArray)=>[writer,...currentArray]);
    setWriter("");
  }

  return (
   <div>


    <div className={styles.backBoard}
    >
      {writers.map((item,index) => <div key={index}>{item}</div>)}


    </div>

    
      <form 
      className={styles.input} 
      onSubmit={onSubmit}>
      
      <input
      className= {styles.input}
      onChange={onChange}
      value = {writer}
      type= "text"
      placeholder="write here"/>
      
      </form>
      </div>
  );
}

export default App;



const a = [1,2,3,4,5];