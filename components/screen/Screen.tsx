"use client";
import React, { useContext, useEffect, useRef, useState } from 'react'
import { ViewPortHeight } from '@/context/chatbox'
import { useAppSelector } from '@/redux/customHook/useReduxHook';

type ScreeProps = {
    isFcs : boolean
}

export default function Screen({isFcs} : ScreeProps) {

    const currVh = useContext(ViewPortHeight);
    const movLink = useAppSelector((state) => {
      console.log(state.linkpath.linkPath);
      return state.linkpath.linkPath;
      
});
    console.log("mov: ", movLink);
    


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
        src={movLink} 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder="0"></iframe>

      </article>
  )
}


/*
<iframe width="1023" height="575" src="https://www.youtube.com/embed/TueS5JuD130?list=RDMMTueS5JuD130" title="Kesha - GLOW. (Lyrics)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe width="1023" height="575" src="https://www.youtube.com/embed/9LZP0KvMwts?list=RDMMTueS5JuD130" title="GLOW. (Blusher Remix)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
https://drive.google.com/file/d/1N-Ix3Wa_mqvDqz8teKFM0o90gZ9RVhb9/preview
*/