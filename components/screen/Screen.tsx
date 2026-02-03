"use client";
import React, { useContext, useEffect, useRef, useState } from 'react'
import { ViewPortHeight } from '@/context/chatbox'

type ScreeProps = {
    isFcs : boolean
}

export default function Screen({isFcs} : ScreeProps) {

    const currVh = useContext(ViewPortHeight);


  return (
      
      <article
        className="
      h-[55vw]
      max-h-100
      shrink-0
      z-20
      sticky
      top-0
      flex flex-col justify-center items-center align-middle
      p-1
      "
      >
        <iframe 
        className='
        size-full
        contain-content
        '
        src="https://www.youtube.com/embed/9LZP0KvMwts?list=RD9LZP0KvMwts" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder="0"></iframe>

      </article>
  )
}
