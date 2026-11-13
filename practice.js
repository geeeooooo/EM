(()=>{
const all=[...document.querySelectorAll('.worked-solution')];
const open=document.getElementById('show-answers'),close=document.getElementById('hide-answers');
if(open)open.addEventListener('click',()=>all.forEach(x=>x.open=true));
if(close)close.addEventListener('click',()=>all.forEach(x=>x.open=false));
})();