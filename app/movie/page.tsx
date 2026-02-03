import Theatre from "@/components/theatre/Theatre";
import React from "react";

export default function Page() {
  return (
    <section
      className="
    w-full
    min-h-dvh
    bg-[rgb(52,51,51)]
    relative
    flex flex-col justify-start items-center
    "
    >
      <Theatre />
    </section>
  );
}
