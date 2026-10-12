import {config} from "./config.js";
export function initTyping(){
 const el=document.querySelector("#typing-text");if(!el)return;
 if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){el.textContent=config.roles[0];return}
 let role=0,pos=0,deleting=false;
 const tick=()=>{const word=config.roles[role];el.textContent=word.slice(0,pos);let delay=deleting?48:82;
 if(!deleting&&pos===word.length){deleting=true;delay=1150}
 else if(deleting&&pos===0){deleting=false;role=(role+1)%config.roles.length;delay=250}
 pos+=deleting?-1:1;window.setTimeout(tick,delay)};
 tick();
}