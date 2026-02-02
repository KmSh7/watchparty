"use client";
import { type ApiTpye, getUsers, pushText, updateChat } from "@/api/chatting";
import { ViewPortHeight } from "@/context/chatbox";
import React, { use, useContext, useEffect, useRef, useState } from "react";

type ChatboxProps = {
  setEnableFocus: (value: boolean) => void;
  user: ApiTpye[];
  username: string;
};

export default function Chatbox({
  setEnableFocus,
  user,
  username,
}: ChatboxProps) {
  const [convo, setConvo] = useState<string[]>([]);
  const [txtValue, setTxtValue] = useState("");
  const [txtBgColor, setTxtBgColor] = useState("rgb(8, 65, 112)");
  const currVh = useContext(ViewPortHeight);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatboxRef = useRef<HTMLDivElement>(null);
  const [kumar, setKumar] = useState<ApiTpye>();
  const [olivia, setOlivia] = useState<ApiTpye>();
  const [showMsg, setShowMsg] = useState("block");
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
  bottomRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [txtBgColor]);

  useEffect(() => {
    const element = inputRef.current;

    function enableFocus() {
      setEnableFocus(true);
    }

    function disableFocus() {
      setEnableFocus(false);
    }

    element?.addEventListener("focus", enableFocus);
    element?.addEventListener("blur", disableFocus);
    element?.addEventListener("scroll", enableFocus);

    return () => {
      element?.removeEventListener("focus", enableFocus);
      element?.removeEventListener("blur", disableFocus);
      element?.removeEventListener("scroll", disableFocus);
    };
  }, [setEnableFocus]);

  return (
    <article
      ref={chatboxRef}
      style={{
        height: `${currVh < 500 ? 15 : 60}dvh`,
      }}
      className="
      shadow-[2px_2px_12px_rgb(0,0,0)]
      w-[96%]
      rounded
      m-2
      flex flex-col items-center
      shrink
      max-h-[60vh]
      "
    >
      <section
        className="
        grow
        bg-[rgb(46,46,46)]
        w-full
        overflow-y-auto
        flex flex-col  items-left
                "
      >
        {user.map((item: ApiTpye, index: number) => {
          return (
            <div
              className="m-2
            flex flex-col
            relative
            "
              key={index}
            >
              {item.userSays.map((txt: string, index: number) => {
                const usr = txt.slice(0, 3);
                return (
                  <span
                    data-msg={index}
                    key={index}
                    id={`msg${index}`}
                    className={`
                      m-2 
                      p-1 
                      rounded-lg 
                      ${usr === "KRS" ? "bg-[rgb(19,88,112)]" : "bg-[rgb(124,18,143)]"}
                      ${usr === "KRS" ? "self-start" : "self-end"}
                      
                      `}
                  >
                    {txt.slice(3)}
                  </span>
                );
              })}
              <div ref={bottomRef} />
            </div>
          );
        })}
      </section>

      <section
        className="
        w-full
        h-auto
        flex flex-row 
        justify-center
        sticky
        bottom-0
        "
      >
        <input
          ref={inputRef}
          id="textbox"
          className="
            shadow-[2px_2px_12px_rgb(0,0,0)]
            grow
            outline-none
            p-3
            text-white-900
            text-xlx
            focus:bg-black
            z-10
            "
          onChange={(e) => {
            setTxtValue(e.target.value);
          }}
          type="text"
          value={txtValue}
        />
        <button
          className="
        shadow-[2px_2px_12px_rgb(0,0,0)]
        bg-black 
        text-5xl
        text-white 
        w-[10dvw]
        text-center 
        font-bold
        active:shadow-0xl
        duration-100
        "
          onClick={() => {
            if (!(txtValue.trim() == "") && !(txtValue == null)) {
              if (username == "kumar") {
                setTxtBgColor("rgb(4, 134, 160)");
                pushText([`KRS${txtValue}`]);
              } else {
                setTxtBgColor("#9e09a5");
                pushText([`OLA${txtValue}`]);
              }
              setTxtValue("");
            }
          }}
        >
          {">"}
        </button>
      </section>
    </article>
  );
}
