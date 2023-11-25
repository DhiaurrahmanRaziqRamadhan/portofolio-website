// Navbar Fixed
window.onscroll = () => {
  const header = document.querySelector('header');
  const fixNav = header.offsetTop;
  const toTop = document.querySelector('#toTop')

  if(window.scrollY > fixNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.add('hidden');
    toTop.classList.remove('flex');
  }
}

// window.addEventListener('click', (e) => {
//   if(e.target != hamburger && e.target != navMenu) {
//     hambuger.classList.remove('hamburger-active')
//     navMenu.classList.add('hidden')
//   }
// })