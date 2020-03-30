
//Navbar Active Links
(function activeLinks(){
  const currentPath = window.location.pathname;
  let pathName = currentPath.match(/(index)|(about)|(gallery)/g)[0];

  const navBarMain = document.querySelector('#navbarMain');
  const navBarSide = document.querySelector('#mobile-demo');
  const navLinksMain = navBarMain.querySelectorAll('li');
  const navLinksSide = navBarSide.querySelectorAll('li');

  if(pathName === 'index'){
    navLinksMain[0].className = 'active';
    navLinksSide[0].className = 'active';
  }
  else if(pathName === 'gallery'){
    navLinksMain[1].className = 'active';
    navLinksSide[1].className = 'active';
  }
  else if(pathName === 'about'){
    navLinksMain[2].className = 'active';
    navLinksSide[2].className = 'active';
  }
})();

//Logo Float right on mobile

//resize gallery box
let sizeBox = document.getElementsByClassName('.carousel-slider');
let boxToSize = document.getElementsByClassName('.gallery');