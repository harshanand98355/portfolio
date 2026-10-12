const projects=[
 {name:"Portfolio Universe",type:"Websites",description:"A responsive personal portfolio with a dark neon visual system.",tags:["HTML","CSS","JavaScript"],mark:"YN",image:"",repo:"https://github.com/",demo:"#home"},
 {name:"TaskFlow",type:"Applications",description:"A sample task dashboard concept for organizing everyday work.",tags:["JavaScript","UI Design"],mark:"TF",image:"",repo:"https://github.com/",demo:"#projects"},
 {name:"WeatherSphere",type:"Experiments",description:"A weather interface concept with clear forecast cards.",tags:["API Concept","CSS"],mark:"WS",image:"",repo:"https://github.com/",demo:"#projects"},
 {name:"ShopNova",type:"Websites",description:"An ecommerce landing page concept focused on product discovery.",tags:["HTML","CSS"],mark:"SN",image:"",repo:"https://github.com/",demo:"#projects"},
 {name:"DevJournal",type:"Applications",description:"A clean writing interface for developer notes and articles.",tags:["JavaScript","Responsive"],mark:"DJ",image:"",repo:"https://github.com/",demo:"#projects"},
 {name:"DataVision",type:"Experiments",description:"A dashboard concept for presenting metrics and trends.",tags:["Charts Concept","UI"],mark:"DV",image:"",repo:"https://github.com/",demo:"#projects"}
];
export function initProjects(){
 const grid=document.querySelector("#projects-grid");if(!grid)return;
 const render=(filter="All")=>{
  grid.replaceChildren();
  projects.filter(p=>filter==="All"||p.type===filter).forEach(p=>{
   const card=document.createElement("article");card.className="project-card reveal is-visible";
   const thumb=document.createElement("div");thumb.className="project-thumb";
   if(p.image){const img=document.createElement("img");img.src=p.image;img.alt=`${p.name} project preview`;img.loading="lazy";img.onerror=()=>{img.remove();const mark=document.createElement("span");mark.className="project-monogram";mark.textContent=p.mark;thumb.append(mark)};thumb.append(img)}
   else{const mark=document.createElement("span");mark.className="project-monogram";mark.textContent=p.mark;thumb.append(mark)}
   const body=document.createElement("div");body.className="project-body";
   const top=document.createElement("div");top.className="project-topline";
   const h=document.createElement("h3");h.textContent=p.name;const type=document.createElement("span");type.className="project-type";type.textContent=p.type;top.append(h,type);
   const desc=document.createElement("p");desc.textContent=p.description;
   const tags=document.createElement("div");tags.className="tags";p.tags.forEach(t=>{const s=document.createElement("span");s.className="tag";s.textContent=t;tags.append(s)});
   const links=document.createElement("div");links.className="project-links";
   [[p.repo,"GitHub ↗"],[p.demo,"Preview ↗"]].forEach(([url,label])=>{const a=document.createElement("a");a.href=url;a.textContent=label;if(url.startsWith("http")){a.target="_blank";a.rel="noopener noreferrer"}links.append(a)});
   body.append(top,desc,tags,links);card.append(thumb,body);grid.append(card);
  });
 };
 document.querySelectorAll("[data-project-filter]").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll("[data-project-filter]").forEach(b=>b.classList.toggle("active",b===btn));render(btn.dataset.projectFilter);
 }));
 render();
}