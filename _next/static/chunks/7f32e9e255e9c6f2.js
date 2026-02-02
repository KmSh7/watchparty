(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,18566,(e,t,r)=>{t.exports=e.r(76562)},28867,e=>{"use strict";var t=e.i(43476),r=e.i(18566),o=e.i(71645);function a(){let[e,a]=(0,o.useState)(""),[i,n]=(0,o.useState)(!0);return(0,o.useEffect)(()=>{0==e.trim().length?n(!0):n(!1)},[e]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("input",{className:"   bg-[rgba(96,26,26,0.9)]   my-2   py-1   px-2   w-full   rounded   shadow-[2px 2px 2px rgb(0,0,34)]   outline-none   text-white   text-center   ",type:"textbox",value:e,onChange:e=>{a(e.target.value)}}),(0,t.jsx)("button",{id:"tomovie",className:`
    ${!i?"bg-red-800":"bg-[rgb(0,0,0)]"}
    px-4
    py-2
    m-5
    rounded
    ${!i?"hover:bg-amber-900":""}
    ${!i?"shadow-[1px_1px_10px_rgb(60,60,60)]":""}
    ${!i?"active:shadow-none":""}
    ${!i?"text-white":"text-gray-300"}
    duration-200
    max-w-fit
    self-center
    `,disabled:i,onClick:()=>{(0,r.redirect)("/movie")},children:i?"Disabled":"Proceed"})]})}e.s(["default",()=>a])}]);