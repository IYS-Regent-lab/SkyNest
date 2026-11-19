
document.addEventListener('DOMContentLoaded',()=>{
 const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav-links');
 if(toggle&&nav)toggle.addEventListener('click',()=>{let open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
 document.querySelectorAll('.faq-question').forEach(btn=>btn.addEventListener('click',()=>{let item=btn.closest('.faq-item');item.classList.toggle('open');btn.setAttribute('aria-expanded',String(item.classList.contains('open')));}));
 const search=document.querySelector('#faqSearch');
 if(search)search.addEventListener('input',()=>{let term=search.value.toLowerCase(),count=0;document.querySelectorAll('.faq-item').forEach(item=>{let show=item.textContent.toLowerCase().includes(term);item.hidden=!show;if(show)count++;});document.querySelector('#noResults').hidden=count>0;});
 const form=document.querySelector('#contactForm');
 if(form)form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;let name=document.querySelector('#name').value.trim(),email=document.querySelector('#email').value.trim(),pkg=document.querySelector('#package').value,msg=document.querySelector('#message').value.trim();let subject=encodeURIComponent('SkyNest enquiry - '+pkg),body=encodeURIComponent('Name: '+name+'\nEmail: '+email+'\nPackage: '+pkg+'\n\nMessage:\n'+msg);document.querySelector('#formNotice').textContent='Your email application should open with the enquiry details. The demonstration recipient is hello@example.com.';window.location.href='mailto:hello@example.com?subject='+subject+'&body='+body;});
 document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
});
