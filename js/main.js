
// ═══════════════════════════════
// FLOW CONTROL
// ═══════════════════════════════
const CREDS = {email:"guest@prasanth.dev", pass:"portfolio2025"};

// 1. Splash → Login (or straight to Dashboard if already signed in)
window.addEventListener('load', () => {
  const urlParams = new URLSearchParams(location.search);
  const skipViaUrl = urlParams.get('home') === '1';
  let skipViaSession = false;
  try { skipViaSession = sessionStorage.getItem('prasanth_session') === 'active'; } catch(e) {}

  if (skipViaUrl || skipViaSession) {
    // Skip splash + login + profile picker entirely — go straight to dashboard
    try { sessionStorage.setItem('prasanth_session', 'active'); } catch(e) {}
    document.getElementById('splash').style.display = 'none';
    const mp = document.getElementById('main-page');
    mp.style.display = 'block';
    mp.classList.add('visible');
    // clean the URL so it doesn't stay ?home=1 forever
    if (skipViaUrl) history.replaceState(null, '', 'prasanth-portfolio.html');
    setTimeout(initScrollAnim, 150);
    return;
  }

  setTimeout(() => {
    const splash = document.getElementById('splash');
    splash.classList.add('hide');
    setTimeout(() => {
      splash.style.display = 'none';
      showLogin();
    }, 650);
  }, 1400);
});

function showLogin() {
  document.getElementById('login-page').classList.add('visible');
}

// 2. Login → Profile Picker (with RED WIPE)
function doLogin() {
  const email = document.getElementById('l-email').value.trim();
  const pass  = document.getElementById('l-pass').value.trim();
  const err   = document.getElementById('login-error');
  const btn   = document.getElementById('login-btn');
  const loader= document.getElementById('login-loader');
  if (!email || !pass) { showErr('Please enter both email and password.'); return; }
  btn.style.display = 'none'; loader.style.display = 'block';
  setTimeout(() => {
    if (email === CREDS.email && pass === CREDS.pass) {
      transitionTo('profile');
    } else {
      loader.style.display = 'none'; btn.style.display = 'block';
      showErr('Incorrect email or password. Try the credentials shown below.');
    }
  }, 900);
}

function doGuestLogin() {
  document.getElementById('login-btn').style.display = 'none';
  document.getElementById('login-loader').style.display = 'block';
  setTimeout(() => transitionTo('profile'), 700);
}

// 3. Profile selected → Dashboard (with RED WIPE)
function goToDashboard() {
  transitionTo('main');
}

// 4. Logout → Login (with RED WIPE)
function doLogout() {
  transitionTo('login');
  setTimeout(() => {
    document.getElementById('l-email').value = '';
    document.getElementById('l-pass').value = '';
    document.getElementById('login-error').style.display = 'none';
    document.getElementById('login-btn').style.display = 'block';
    document.getElementById('login-loader').style.display = 'none';
    window.scrollTo(0,0);
  }, 700);
}

// ═══════════════════════════════
// RED WIPE PAGE TRANSITION
// ═══════════════════════════════
function transitionTo(target) {
  const wipe = document.getElementById('transition-wipe');
  // Phase 1: red slides IN from left
  wipe.style.transform = 'scaleX(0)';
  wipe.style.transformOrigin = 'left';
  wipe.style.transition = 'transform 0.38s cubic-bezier(.77,0,.18,1)';
  wipe.style.display = 'block';

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      wipe.style.transform = 'scaleX(1)';
    });
  });

  // Phase 2: swap pages, red slides OUT to right
  setTimeout(() => {
    // hide all pages
    document.getElementById('login-page').classList.remove('visible');
    document.getElementById('profile-page').classList.remove('visible');
    document.getElementById('main-page').style.display = 'none';
    document.getElementById('main-page').classList.remove('visible');

    // show target
    if (target === 'profile') {
      document.getElementById('profile-page').classList.add('visible');
    } else if (target === 'main') {
      const mp = document.getElementById('main-page');
      mp.style.display = 'block';
      sessionStorage.setItem('prasanth_session', 'active');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => { mp.classList.add('visible'); });
      });
      setTimeout(() => { initScrollAnim(); showToast("👋 Welcome to Prasanth's Portfolio!"); }, 500);
    } else if (target === 'login') {
      sessionStorage.removeItem('prasanth_session');
      document.getElementById('login-page').classList.add('visible');
      showToast('👋 Signed out successfully.');
    }

    // wipe slides OUT to right
    wipe.style.transformOrigin = 'right';
    wipe.style.transition = 'transform 0.38s cubic-bezier(.77,0,.18,1)';
    wipe.style.transform = 'scaleX(0)';
    setTimeout(() => { wipe.style.display = 'none'; }, 400);

  }, 400);
}

// Enter key on login
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && document.getElementById('login-page').classList.contains('visible')) doLogin();
  if (e.key === 'Escape') document.querySelectorAll('.modal-overlay.open').forEach(m => closeModal(m.id));
});

// ═══════════════════════════════
// NAV SCROLL
// ═══════════════════════════════
window.addEventListener('scroll', () => {
  document.getElementById('topnav').classList.toggle('solid', window.scrollY > 60);
});

// ═══════════════════════════════
// MODALS
// ═══════════════════════════════
function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow = '';
}
document.querySelectorAll('.modal-overlay').forEach(o => {
  o.addEventListener('click', e => { if (e.target === o) closeModal(o.id); });
});

// ═══════════════════════════════
// TOAST
// ═══════════════════════════════
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3600);
}

// ═══════════════════════════════
// SCROLL ANIMATIONS
// ═══════════════════════════════
function initScrollAnim() {
  // General fade-in
  const io = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) setTimeout(() => e.target.classList.add('show'), i * 55);
    });
  }, { threshold: 0.07 });
  document.querySelectorAll('.fi').forEach(el => io.observe(el));

  // Skill bar progress animation
  const barObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bars = entry.target.querySelectorAll('.sk-bar-fill');
        bars.forEach((bar, i) => {
          const w = bar.getAttribute('data-w') || '0';
          setTimeout(() => { bar.style.width = w + '%'; }, i * 80);
        });
        barObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.sk-block').forEach(block => barObserver.observe(block));
}

// ═══════════════════════════════
// CONTACT FORM
// ═══════════════════════════════
function handleContact() {
  const name  = document.getElementById('cf-name').value.trim();
  const email = document.getElementById('cf-email').value.trim();
  const msg   = document.getElementById('cf-msg').value.trim();
  const status= document.getElementById('cf-status');
  if (!name || !email || !msg) {
    status.style.display='block';status.style.background='rgba(229,9,20,0.08)';
    status.style.borderColor='var(--red)';status.style.color='#ff7070';
    status.textContent='⚠ Please fill in name, email, and message.'; return;
  }
  status.style.display='block';status.style.background='rgba(70,211,105,0.08)';
  status.style.borderColor='var(--green)';status.style.color='var(--green)';
  status.textContent='✓ Thanks! Email prasanthsekar3794@gmail.com directly, or add EmailJS to enable auto-sending.';
  showToast('✉ Message noted! Prasanth will be in touch.');
}

function showErr(msg) {
  const e = document.getElementById('login-error');
  e.textContent = msg; e.style.display = 'block';
}





// ═══════════════════════════════
// NAVIGATE TO DETAIL PAGE
// ═══════════════════════════════
function goDetail(id) {
  // Netflix-style red wipe transition then open detail page
  const wipe = document.getElementById('transition-wipe');
  wipe.style.display = 'block';
  wipe.style.transformOrigin = 'left';
  wipe.style.transition = 'transform 0.38s cubic-bezier(.77,0,.18,1)';
  wipe.style.transform = 'scaleX(0)';
  requestAnimationFrame(() => requestAnimationFrame(() => {
    wipe.style.transform = 'scaleX(1)';
    setTimeout(() => {
      window.location.href = 'detail.html?id=' + id;
    }, 400);
  }));
}
