"use client";

import React, { useEffect, useRef, useState } from "react";
import Screen from "../screen/Screen";
import Chatbox from "../chatbox/chatbox";
import { ViewPortHeight } from "@/context/chatbox";
import { ApiTpye, getUsers } from "@/api/chatting";

export default function Theatre() {
  const [currVh, setCurrVh] = useState<number>(0);
  const [isFocused, setIsFocused] = useState(false);
  const [fstLanded, setFstLanded] = useState(true);
  const [user, setUser] = useState("");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [api, setApi] = useState<ApiTpye[]>();

  useEffect(() => {

    let flag = true;

    async function fetchData (){

        const userdata : ApiTpye[] = await getUsers(); 
        setApi(userdata);
    }
    fetchData(); //initial fetch

    const interval = setInterval(fetchData, 200);

    return ()=>{
        flag = false;
        clearInterval(interval);
    }
  }, []);

  async function processUsers(name: string) {
    if (name == "kumar") {
      setUser("kumar");
    } else {
      setUser("olivia");
    }
    setFstLanded(false);
  }

  useEffect(() => {
    function getVh() {
      if (!window.visualViewport) return;

      setCurrVh(window.visualViewport.height);
    }

    //get initial value
    getVh();

    window.visualViewport?.addEventListener("resize", getVh);
    window.visualViewport?.addEventListener("scroll", getVh);

    //cleanup
    return () => {
      window.visualViewport?.removeEventListener("resize", getVh);
      window.visualViewport?.removeEventListener("scroll", getVh);
    };
  }, []);

  useEffect(() => {
    // Option B: more precise control (use if Option A feels jumpy)
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop =
        scrollContainerRef.current.scrollHeight;
    }
  }, [isFocused]);

  return fstLanded ? (
    <section
      className="
    size-[90vw]
    h-[80dvh]
    max-w-150
    rounded
    relative
    flex flex-col justify-center items-center
    my-5
    "
    >
      <article
        className="
        w-full
        h-[50%]
        bg-black
        rounded-lg
        flex flex-col justify-center items-center
        *:p-3
        *:m-3
        *:w-[40%]
        *:text-center
        *:text-2xl
        *:rounded
        "
      >
        <button onClick={() => processUsers("kumar")} className="bg-cyan-700">
          Kumar
        </button>
        <button onClick={() => processUsers("olivia")} className="bg-pink-600">
          Olivia
        </button>
      </article>
    </section>
  ) : (
    <ViewPortHeight.Provider value={currVh}>
      <Screen isFcs={isFocused} />
      <Chatbox username={user} user={api ?? []} setEnableFocus={setIsFocused} />
    </ViewPortHeight.Provider>
  );
}
