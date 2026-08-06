// Preloader
(function(){
  const percentEl = document.getElementById('preloaderPercent');
  const barEl = document.getElementById('preloaderBar');
  const preloader = document.getElementById('preloader');
  const duration = 1800;
  const start = performance.now();
  function tick(now){
    const elapsed = now - start;
    const pct = Math.min(100, Math.round((elapsed/duration)*100));
    percentEl.textContent = pct + '%';
    barEl.style.width = pct + '%';
    if(pct < 100){
      requestAnimationFrame(tick);
    } else {
      setTimeout(()=>{
        preloader.classList.add('hide');
        setTimeout(()=> preloader.remove(), 700);
      }, 250);
    }
  }
  requestAnimationFrame(tick);
})();

// WhatsApp
const waBtn = document.getElementById('waBtn');
const waPopover = document.getElementById('waPopover');
if(waBtn && waPopover){
  waBtn.addEventListener('click', (e)=>{ e.stopPropagation(); waPopover.classList.toggle('open'); });
  document.addEventListener('click', (e)=>{
    if(!waPopover.contains(e.target) && e.target !== waBtn){ waPopover.classList.remove('open'); }
  });
}

// Progress bar
const progress = document.getElementById('progress');
function updateProgress(){
  const h = document.documentElement;
  const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  progress.style.width = scrolled + '%';
}
window.addEventListener('scroll', updateProgress, {passive:true});
updateProgress();

// Mobile menu
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
hamburgerBtn.addEventListener('click', ()=>{ mobileMenu.classList.toggle('open'); });
mobileMenu.querySelectorAll('a').forEach(a=>{ a.addEventListener('click', ()=> mobileMenu.classList.remove('open')); });

// Reveal animation
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.classList.add('in'); io.unobserve(entry.target); }
  });
}, {threshold:0.12, rootMargin:'0px 0px -60px 0px'});
revealEls.forEach(el=> io.observe(el));