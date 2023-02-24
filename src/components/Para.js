import React from "react";
import { useState } from "react";

export default function Para(){
    const[msg, setMsg]=useState("");
    function handleClick(){
        setMsg("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy")
    }
    return(
        <div>
            <button id="click" onClick={handleClick}>click me</button>
            <p>{msg}</p>
        </div>
    )
}