import {config} from "./config.js";
export function initContact(){
 const form=document.querySelector("#contact-form"),status=document.querySelector("#form-status");if(!form||!status)return;
 const emailLink=document.querySelector("[data-config-email]");if(emailLink){emailLink.href=`mailto:${config.email}`;emailLink.textContent=`${config.email} ↗`}
 form.addEventListener("submit",e=>{
  e.preventDefault();status.className="form-note";
  if(!form.reportValidity()){status.textContent="Please complete the required fields and check your email address.";status.classList.add("error");return}
  const data=new FormData(form),name=String(data.get("name")).trim(),email=String(data.get("email")).trim(),subject=String(data.get("subject")).trim(),message=String(data.get("message")).trim();
  const body=`From: ${name} (${email})%0D%0A%0D%0A${encodeURIComponent(message)}`;
  status.textContent="Opening your email app with a draft. Your message has not been sent yet.";status.classList.add("success");
  window.location.href=`mailto:${encodeURIComponent(config.email)}?subject=${encodeURIComponent(subject)}&body=${body}`;
 });
}