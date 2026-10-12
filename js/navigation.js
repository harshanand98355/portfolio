export function initNavigation(){
 const header=document.querySelector(".site-header"),toggle=document.querySelector("#menu-toggle"),links=document.querySelector("#nav-links");
 const close=()=>{toggle?.setAttribute("aria-expanded","false");toggle?.setAttribute("aria-label","Open navigation");links?.classList.remove("open")};
 toggle?.addEventListener("click",()=>{const open=toggle.getAttribute("aria-expanded")!=="true";toggle.setAttribute("aria-expanded",String(open));toggle.setAttribute("aria-label",open?"Close navigation":"Open navigation");links?.classList.toggle("open",open)});
 links?.querySelectorAll("a").forEach(a=>a.addEventListener("click",close));
 document.addEventListener("keydown",e=>{if(e.key==="Escape")close()});
 document.addEventListener("click",e=>{if(links?.classList.contains("open")&&!links.contains(e.target)&&!toggle?.contains(e.target))close()});
 const update=()=>{header?.classList.toggle("scrolled",window.scrollY>20);document.querySelector("#back-top")?.classList.toggle("visible",window.scrollY>500)};
 window.addEventListener("scroll",update,{passive:true});update();
 document.querySelector("#back-top")?.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
 const sections=[...document.querySelectorAll("main section[id]")];
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){links?.querySelectorAll('a[href^="#"]').forEach(a=>a.classList.toggle("active",a.hash===`#${entry.target.id}`))}}),{rootMargin:"-35% 0px -55% 0px"});
 sections.forEach(s=>observer.observe(s));
}