
import { useState } from 'react'
import './App.css'
import axios from 'axios';
function App() {
const [name,setname] = useState("");
const [email,setemail] = useState("");
const [pass,setpass] = useState("")


async function hanldesubmit(e){
  e.preventDefault()
  let obj = {name,email,pass} // storing in a object
  console.log(obj);
  let api = "http://localhost:7000/";
  try {
    await axios.post(api,obj)
  } catch (error) {
    console.log(error)
  }
}



  return (
    <>
    <form onSubmit={hanldesubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e)=>{
          setname(e.target.value)
        }}/>
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e)=>{
          setemail(e.target.value)
        }} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={pass} onChange={(e)=>{
          setpass(e.target.value)
        }}/>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default App
