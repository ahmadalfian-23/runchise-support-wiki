
(()=>{const b=document.body,s=document.querySelector('.sidebar'),o=document.querySelector('.overlay'),m=document.querySelector('.menu'),t=document.querySelector('.theme'),q=document.querySelector('#q'),links=[...document.querySelectorAll('.nav a')];
if(localStorage.getItem('runchise-theme')==='dark')b.classList.add('dark');
t?.addEventListener('click',()=>{b.classList.toggle('dark');localStorage.setItem('runchise-theme',b.classList.contains('dark')?'dark':'light')});
m?.addEventListener('click',()=>{s.classList.add('open');o.classList.add('show')});o?.addEventListener('click',()=>{s.classList.remove('open');o.classList.remove('show')});
links.forEach(x=>x.addEventListener('click',()=>{s.classList.remove('open');o.classList.remove('show')}));
q?.addEventListener('input',e=>{let v=e.target.value.toLowerCase().trim();links.forEach(a=>a.style.display=(!v||a.textContent.toLowerCase().includes(v))?'block':'none')});
document.querySelectorAll('a[href^="http"]').forEach(a=>{a.target='_blank';a.rel='noopener noreferrer'});
})();
