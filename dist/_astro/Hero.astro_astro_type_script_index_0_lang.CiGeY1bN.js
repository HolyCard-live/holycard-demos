import{g as r}from"./index.CzGW6FVa.js";const n=document.getElementById("hero-particles");if(n){const s=["M10 24 Q2 16 4 4 Q14 2 18 12 Q16 20 10 24Z","M8 20 Q1 13 3 3 Q12 1 15 10 Q13 17 8 20Z","M12 28 Q3 18 5 4 Q16 1 22 13 Q18 24 12 28Z"];for(let e=0;e<10;e++){const t=document.createElement("div"),i=14+Math.random()*14;t.style.cssText=`
        position: absolute;
        left: ${Math.random()*100}%;
        top: -40px;
        width: ${i}px;
        opacity: ${.2+Math.random()*.4};
      `;const d="http://www.w3.org/2000/svg",a=document.createElementNS(d,"svg");a.setAttribute("viewBox","0 0 24 30"),a.style.width="100%";const o=document.createElementNS(d,"path");o.setAttribute("d",s[e%s.length]),o.setAttribute("fill",e%2===0?"#8aab8b":"#a8bf8c"),a.appendChild(o),t.appendChild(a),n.appendChild(t);const h=7+Math.random()*6;r.to(t,{y:(n.parentElement?.offsetHeight??600)+60,x:(Math.random()-.5)*80,rotation:(Math.random()-.5)*360,duration:h,delay:Math.random()*4,ease:"none",repeat:-1,repeatDelay:Math.random()*2,onRepeat(){r.set(t,{y:-40,x:0}),t.style.left=`${Math.random()*100}%`}})}}
