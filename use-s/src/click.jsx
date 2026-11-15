import { useState } from "react"
function Click(){
    const [name, setName]= useState("")
    const [message, setMessage]= useState("")
    

    function Change(){
        setMessage(`hello ${name}`)
        
        

    }
    return(
        <>
        <input type="text"
        value={name}
        onChange={(e)=>{
            setName(e.target.value)
        }} />
       
<br />
<br />
        <button onClick={Change}>Click</button>
        <br />
        <h1>{message}</h1>
        
        </>
    )
}
export  default Click