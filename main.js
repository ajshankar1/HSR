function toggleNav(){
  document.querySelector('.navlinks').classList.toggle('open-mobile');
}

function toggleCtaMenu(e){
  e.stopPropagation();
  document.querySelectorAll('.cta-dropdown').forEach(d=>d.classList.toggle('open', d === e.currentTarget ? !d.classList.contains('open') : false));
}

document.addEventListener('click', function(){
  document.querySelectorAll('.cta-dropdown.open').forEach(d=>d.classList.remove('open'));
});

function showToast(msg){
  let t = document.querySelector('.toast');
  if(!t){
    t = document.createElement('div');
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(()=> t.classList.remove('show'), 3500);
}

function handleDemoForm(e, label){
  e.preventDefault();
  showToast((label || 'Request') + ' sent — this is a demo form, no data is stored yet.');
  e.target.reset();
}

document.addEventListener('DOMContentLoaded', function(){
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navlinks a[data-nav]').forEach(a=>{
    if(a.getAttribute('href') === path) a.classList.add('active');
  });
});
