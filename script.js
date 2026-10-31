const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle?.addEventListener('click', () => nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

const themeToggle = document.getElementById('themeToggle');
themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('light');
  themeToggle.textContent = document.body.classList.contains('light') ? '☀' : '☾';
  localStorage.setItem('personal-site-theme', document.body.classList.contains('light') ? 'light' : 'dark');
});
if (localStorage.getItem('personal-site-theme') === 'light') {
  document.body.classList.add('light');
  if (themeToggle) themeToggle.textContent = '☀';
}

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const sectionLinks = [...document.querySelectorAll('nav a')];
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      sectionLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id));
    }
  });
}, { rootMargin: '-25% 0px -65% 0px' });
document.querySelectorAll('main section[id]').forEach(section => sectionObserver.observe(section));

document.getElementById('year').textContent = new Date().getFullYear();

// 发布前可将这里的邮箱改成你愿意公开的邮箱。
const publicEmail = '2729234476@qq.com';
const emailLink = document.getElementById('emailLink');
if (emailLink) emailLink.href = `mailto:${publicEmail}`;
