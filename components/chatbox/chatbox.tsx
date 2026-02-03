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
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const chatboxRef = useRef<HTMLDivElement>(null);
  const [kumar, setKumar] = useState<ApiTpye>();
  const [olivia, setOlivia] = useState<ApiTpye>();
  const [showMsg, setShowMsg] = useState("block");
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const [newTextArrrived, setNewTextArrrived] = useState(0);

  useEffect(() => {
    let flag = true;
    const el = document.getElementById("chatbox");
    // el.scrollTo({ top: `${el.scrollHeight}`, behavior: "smooth" });
    if(el)
    {
     el.scrollTop = el?.scrollHeight ?? 0;
    }
    if (newTextArrrived > 1) {
      if (!flag) {
        return;
      }
      setNewTextArrrived(0);
    }
    return () => {
      flag = false;
    };
  }, [newTextArrrived]);

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
        height: `${currVh < 500 ? 15 : 51}dvh`,
      }}
      className="
      shadow-[-2px_4px_12px_rgb(0,0,0)]
      w-[96%]
      rounded
      m-2
      flex flex-col items-center
      sticky
      top-[55vw]
      "
    >
      <section
        id="chatbox"
        className="
        grow
        bg-[rgb(30,30,30)]
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
                      max-w-[80%]
                      ${usr === "KRS" ? "bg-[rgb(19,88,112)]" : "bg-[rgb(124,18,143)]"}
                      ${usr === "KRS" ? "self-start" : "self-end"}
                      wrap-break-word
                      whitesp1ace-pre-wrap
                      text-[20px]
                      tracking-wider
                      `}
                  >
                    {txt.slice(3)}
                  </span>
                );
              })}
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
        <textarea
          rows={1}
          ref={inputRef}
          id="textbox"
          className="
            shadow-[2px_2px_12px_rgb(255, 255, 255)]
            grow
            outline-none
            p-3
            text-white-900
            text-xlx
            focus:bg-black
            z-10
            h-auto
            wrap-break-word
            overflow-hidden
            "
          onChange={(e) => {
            setTxtValue(e.target.value);
            const el = e.currentTarget;
            el.style.height = `${el.scrollHeight}px`;
          }}
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
                setNewTextArrrived((prev) => prev + 1);
                pushText([`KRS${txtValue}`]);
              } else {
                setNewTextArrrived((prev) => prev + 1);
                pushText([`OLA${txtValue}`]);
              }
              setTxtValue("");
              if(inputRef.current)
              {
              inputRef.current.style.height = "auto";
              }
            }
          }}
        >
          {">"}
        </button>
      </section>
    </article>
  );
}
