"use client"

import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      &copy;Kumar Shaswat
      <br />
      2026 onwards
      <br />
      <Link href="mailto:kumarsha9090@gmail.com">mail@</Link>
      <br />
        <section 
         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="
        flex justify-center
        cursor-grab
        ">
          Top
          <article
            className="animate-bounce"
          >
            &uarr;
          </article>
        </section>
    </>
  );
}
