"use client";
import Image from "next/image";
import './style.css';
import { useState } from "react";

export default function Home() {
    const [exp, setExp] = useState("")
    const cells = ["C", exp, "1" , "2", "3","+", "4", "5", "6", "_", "7", "8", "9", "X", "0", ".", "=", "/"]
    console.log(cells);

    const handleClick = (text)=>{
        setExp((prev)=> prev + text)
    }
    
    return <>
       <div id="container">
            {
                cells.map((text, index)=>{
                    return <div key={index} className={`item${index} btn`} onClick={()=>{
                        if(index == 1){

                        }
                        else    
                          handleClick(text)
                    }}>{text}</div>
                })
            }
       </div>
    </>
}