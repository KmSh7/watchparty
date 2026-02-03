"use client";
import { useAppDispatcher } from "@/redux/customHook/useReduxHook";
import { setLink } from "@/redux/slice/linkSlice";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function MovieLinkBox() {
  const dispatch = useAppDispatcher();

  const [movLink, setMovLink] = useState("");
  const [btnState, setBtnState] = useState(true);

  useEffect(() => {
    if (movLink.trim().length == 0) {
      setBtnState(true);
    } else {
      setBtnState(false);
    }
  }, [movLink]);

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
        type="textbox"
        value={movLink}
        onChange={(e) => {
          setMovLink(e.target.value);
        }}
      />

      <button
        id="tomovie"
        className={`
    ${!btnState ? "bg-red-800" : "bg-[rgb(0,0,0)]"}
    px-4
    py-2
    m-5
    rounded
    ${!btnState ? "hover:bg-amber-900" : ""}
    ${!btnState ? "shadow-[1px_1px_10px_rgb(60,60,60)]" : ""}
    ${!btnState ? "active:shadow-none" : ""}
    ${!btnState ? "text-white" : "text-gray-300"}
    duration-200
    max-w-fit
    self-center
    `}
        disabled={btnState}
        onClick={() => {

          if (movLink.includes("https://www.youtube.com")) {
            const src_idx = movLink.indexOf("src=");
            if (src_idx == -1) {
            } else {
              let upd_str = movLink.slice(src_idx + 4);
              console.log(upd_str);
              if (upd_str) {
                const quoteType = upd_str[0];
                const list_idx = "?list="; //can be ' or "
                upd_str = upd_str.slice(1);
                const qt_idx = upd_str.indexOf(list_idx);
                let mvLink="";
                if(qt_idx==-1)
                {
                    const q_isx = upd_str.indexOf(quoteType);
                    mvLink = upd_str.slice(0, q_isx);
                }
                else
                {
                    mvLink = upd_str.slice(0, qt_idx);
                    console.log(mvLink);
                }
                dispatch(setLink(mvLink));
              } else {
                console.log(upd_str + "was null");
              }
            }
          }
          else{
            if(movLink.includes("https://drive.google.com"))
            {
                const viewIndex = movLink.indexOf("view?");
                let mvLink = movLink.slice(0, viewIndex);
                console.log("drive mv link:", mvLink);
                mvLink = mvLink + "preview";
                dispatch(setLink(mvLink));
            }
          }
          redirect("/movie");
        }}
      >
        {btnState ? "Disabled" : "Proceed"}
      </button>
    </>
  );
}
