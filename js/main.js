const themeBtn = document.getElementById("theme-toggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle('light');
  if (document.body.classList.contains('light')) {
    document.documentElement.style.setProperty(
      '--bg',
      '#f8fafc'
    );
    document.documentElement.style.setProperty(
      '--card',
      '#fff'
    );
    document.documentElement.style.setProperty(
      '--text',
      '#111827'
    );
    themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem(
      'theme',
      'light'
    )
  } else {
    document.documentElement.style.setProperty(
      '--bg',
      '#0f172a'
    );
    document.documentElement.style.setProperty(
      '--card',
      '#111827'
    );
    document.documentElement.style.setProperty(
      '--text',
      '#fff'
    );
    themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem(
      'theme',
      'dark'
    )
  }
});



const savedAccent = 
localStorage.getItem('accent');
if (savedAccent) {
  document.documentElement.style.setProperty('--accent', savedAccent);
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  document.body.classList.add('light');
    document.documentElement.style.setProperty(
      '--bg',
      '#f8fafc'
    );
    document.documentElement.style.setProperty(
      '--card',
      '#fff'
    );
    document.documentElement.style.setProperty(
      '--text',
      '#111827'
    );
}
  document.querySelectorAll('.color')
  .forEach(color => {
  color.addEventListener('click', () => {
    let accent ='#3b82f6';
    if(color.classList.contains('purple'))
      accent = '#8b5cf6';
    if(color.classList.contains('green'))
      accent = '#22c55e';
    if(color.classList.contains('orange'))
      accent = '#f97316';

    document.documentElement.style.setProperty('--accent',accent);

    localStorage.setItem('accent', accent);
  });
});

const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach(link =>{
    link.addEventListener("click", function(){
      navLinks.forEach(item => item.classList.remove('active'));
      this.classList.add("active");
    });
  });

const sr = ScrollReveal({
  distance: '60px',
  duration: 1500,
  delay: 200,
  reset: false

});
sr.reveal('.hero-content',{
  origin:'left'
});
sr.reveal('.hero-image',{
  origin:'right'
});
sr.reveal('#about',{
  origin:'bottom'
});
sr.reveal('#skills',{
  origin:'bottom'
});
sr.reveal('#projects',{
  origin:'bottom'
});
sr.reveal('#contact',{
  origin:'bottom'
});
sr.reveal('hero-buttons',{
  origin:'bottom',
  delay: 500
});
sr.reveal('theme-controls',{
  origin:'top',
  delay: 300
});
sr.reveal('.navbar',{
  origin:'top',
  distance:'20px',
  duration:1200
});
sr.reveal('.skill-category',{
  origin:'bottom',
  interval:150,
  distance:'40px'
});
sr.reveal('.swiper-slide',{
  origin:'bottom',
  interval:150,
  diatance:'40px'
});


