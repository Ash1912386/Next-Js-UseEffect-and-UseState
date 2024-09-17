"use client"
import { useActionState, useEffect, useState } from "react";

export default function Home() {

  const [name,setName] = useState("Asher")
  const [count,setCount] = useState(0)

  useEffect(()=>{
    console.log("This useEffect will run when page is refresh")
  },[])

  useEffect(()=>{
    console.log("This use Effect is run when we press Increment Count Button")
  },[count])

  const changeName=()=>{
    setName("Hani")
  }

  return (
    <div>
      <h1>Use State</h1>
      <h1>React Hook</h1>
      <br />
      <h1>{name}</h1>
      <button onClick={changeName}>Change Name</button>
      <br />
      <button onClick={()=>setCount(count+1)}>Increment Count = {count}</button>
    </div>
  );
}
