import {config} from "./config.js";
import {initNavigation} from "./navigation.js";
import {initTyping} from "./typing-animation.js";
import {initReveal} from "./reveal-animation.js";
import {initSkills} from "./skills.js";
import {initProjects} from "./projects.js";
import {initContact} from "./contact.js";

function applyConfig(){
 document.querySelectorAll("[data-config]").forEach(el=>{const key=el.dataset.config;if(config[key])el.textContent=config[key]});
 document.querySelectorAll("[data-config-email]").forEach(el=>{el.href=`mailto:${config.email}`;el.textContent=`${config.email} ↗`});
 document.querySelector("#year").textContent=new Date().getFullYear();
 document.querySelector(".footer-inner>div span:last-child").textContent=`© ${new Date().getFullYear()} ${config.name}`;
 document.querySelectorAll(".social-links a[href^='mailto:']").forEach(a=>a.href=`mailto:${config.email}`);
 document.querySelectorAll(".social-links a").forEach(a=>{if(a.textContent.includes("GitHub"))a.href=config.social.github;if(a.textContent.includes("LinkedIn"))a.href=config.social.linkedin});
}
document.addEventListener("DOMContentLoaded",()=>{
 applyConfig();initNavigation();initTyping();initReveal();initSkills();initProjects();initContact();
 window.setTimeout(()=>document.querySelector("#preloader")?.classList.add("hidden"),250);
 window.setTimeout(()=>document.querySelector("#preloader")?.remove(),900);
});