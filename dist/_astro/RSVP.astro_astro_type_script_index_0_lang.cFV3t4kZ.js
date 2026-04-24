import{g as r}from"./index.CzGW6FVa.js";const t=document.getElementById("rsvp-confirm");t&&t.addEventListener("click",()=>{const s=["🌿","🍃","💚","🌱","✨"],o=t.getBoundingClientRect(),i=o.left+o.width/2,d=o.top;for(let n=0;n<18;n++){const e=document.createElement("span");e.textContent=s[n%s.length],e.style.cssText=`
          position: fixed;
          font-size: 18px;
          pointer-events: none;
          z-index: 9999;
          left: ${i}px;
          top: ${d}px;
          transform: translate(-50%, -50%);
        `,document.body.appendChild(e);const a=n/18*Math.PI*2,c=70+Math.random()*80;r.to(e,{x:Math.cos(a)*c,y:Math.sin(a)*c-60,opacity:0,scale:.3,duration:.9+Math.random()*.5,ease:"power2.out",onComplete:()=>e.remove()})}t.textContent="¡Confirmado! 🌿",t.disabled=!0,t.classList.add("opacity-70","cursor-default")});
