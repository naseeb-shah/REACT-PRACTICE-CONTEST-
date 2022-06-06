
import React ,{useState} from 'react'
export default function Age(){
     const [counter,setcounter]=useState(25)
 
     const incri=()=>(
         setcounter(counter+1)
     )
     const dcri=()=>(
        setcounter(counter-1)
    )
return(
    <>
    <h2>Age : {counter}</h2>
    <button onClick={incri}>Age +</button>
    <button onClick={dcri}>Age -</button>
    
    </>
)
}