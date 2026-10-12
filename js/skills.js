const skills = [
  {name:"HTML5",category:"Frontend",symbol:"5",note:"Semantic structure",level:85},
  {name:"CSS3",category:"Frontend",symbol:"3",note:"Responsive styling",level:82},
  {name:"JavaScript",category:"Languages",symbol:"JS",note:"Interactive interfaces",level:72},
  {name:"Git & GitHub",category:"Tools",symbol:"⌘",note:"Version control",level:70},
  {name:"Python",category:"Languages",symbol:"Py",note:"Scripting basics",level:55},
  {name:"Node.js",category:"Backend",symbol:"N",note:"Server-side basics",level:50},
  {name:"Responsive UI",category:"Frontend",symbol:"▣",note:"Mobile-first design",level:78},
  {name:"VS Code",category:"Tools",symbol:"<>",note:"Development workflow",level:85}
];
export function initSkills(){
 const grid=document.querySelector("#skills-grid"); if(!grid)return;
 const render=(filter="All")=>{
   grid.replaceChildren();
   skills.filter(s=>filter==="All"||s.category===filter).forEach(s=>{
     const card=document.createElement("article"); card.className="skill-card";
     const symbol=document.createElement("div");symbol.className="skill-symbol";symbol.textContent=s.symbol;
     const title=document.createElement("h3");title.textContent=s.name;
     const note=document.createElement("p");note.textContent=s.note;
     const meter=document.createElement("div");meter.className="skill-meter";meter.setAttribute("aria-label",`${s.name} example proficiency ${s.level}%`);
     const bar=document.createElement("span");bar.dataset.level=String(s.level);meter.append(bar);
     card.append(symbol,title,note,meter);grid.append(card);
   });
   if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
     requestAnimationFrame(()=>grid.querySelectorAll(".skill-meter span").forEach(b=>b.style.width=`${b.dataset.level}%`));
   }else grid.querySelectorAll(".skill-meter span").forEach(b=>b.style.width=`${b.dataset.level}%`);
 };
 document.querySelectorAll("[data-skill-filter]").forEach(btn=>btn.addEventListener("click",()=>{
   document.querySelectorAll("[data-skill-filter]").forEach(b=>b.classList.toggle("active",b===btn));render(btn.dataset.skillFilter);
 }));
 render();
}