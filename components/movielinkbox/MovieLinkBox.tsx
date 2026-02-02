"use client"
import { redirect } from "next/navigation";
import { useEffect, useState } from "react"

export default function MovieLinkBox() {

    const [movLink, setMovLink] = useState("");
    const [btnState, setBtnState] = useState(true);

    useEffect(()=>{

        if(movLink.trim().length == 0)
        {
            setBtnState(true);
        }
        else
        {
            setBtnState(false);
        }
    }, [movLink])

  return (
    <>
    <input
    className="
    bg-[rgba(96,26,26,0.9)]
    my-2
    py-1
    px-2
    w-full
    rounded
    shadow-[2px 2px 2px rgb(0,0,34)]
    outline-none
    text-white
    text-center
    "
    type='textbox'
    value={movLink}
    onChange={(e)=>{setMovLink(e.target.value)}}
    />
    
    <button 
    id="tomovie"
    className={`
    ${!btnState ? "bg-red-800":"bg-[rgb(0,0,0)]"}
    px-4
    py-2
    m-5
    rounded
    ${!btnState ? "hover:bg-amber-900" : ""}
    ${!btnState ? "shadow-[1px_1px_10px_rgb(60,60,60)]" : ""}
    ${!btnState ? "active:shadow-none":""}
    ${!btnState ? "text-white":"text-gray-300"}
    duration-200
    max-w-fit
    self-center
    `}
    disabled={btnState}
    onClick={()=>{
            redirect("/movie");
    }}
    >{
        btnState ? "Disabled" : "Proceed"
    }</button>
    </>
  )
}
