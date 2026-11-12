(() => {
  const root=document.documentElement;
  const input=document.getElementById('search');
  const sizeKey='em-site-font-size-v1';
  const chapters=[...document.querySelectorAll('.chapter')];
  function applySize(px){const size=Math.max(13,Math.min(25,px));root.style.setProperty('--size',size+'px');try{localStorage.setItem(sizeKey,String(size))}catch(e){}}
  try{const saved=Number(localStorage.getItem(sizeKey));if(saved>=13&&saved<=25)applySize(saved)}catch(e){}
  document.getElementById('increase').addEventListener('click',()=>applySize((parseInt(getComputedStyle(root).getPropertyValue('--size'))||16)+1));
  document.getElementById('decrease').addEventListener('click',()=>applySize((parseInt(getComputedStyle(root).getPropertyValue('--size'))||16)-1));
  function filter(){const q=input.value.trim().toLowerCase();let visible=0;for(const c of chapters){const match=!q||(c.innerText+' '+c.dataset.keywords).toLowerCase().includes(q);c.hidden=!match;if(match)visible++}const empty=document.getElementById('empty');if(empty)empty.hidden=visible!==0;}
  input.addEventListener('input',filter);
  const status=document.getElementById('math-status');
  window.addEventListener('load',()=>{if(window.MathJax&&MathJax.startup&&MathJax.startup.promise){MathJax.startup.promise.then(()=>{status.textContent='Equations rendered with MathJax · use horizontal scrolling for long expressions.';}).catch(()=>{status.textContent='Math rendering failed. Check your connection and reload.';});}else{status.textContent='Math rendering needs an internet connection. Reload when online.';}});
})();