

let changeNav = function(){
    let nav = document.getElementsByTagName('nav')[0];
    let navWrapper = document.getElementsByClassName('nav-wrapper')[0];

    let breakpoint = 100;
    let scrollDown = document.body.scrollTop || document.documentElement.scrollTop;
    if (scrollDown >= breakpoint){
        nav.classList.add('scrolled');
        navWrapper.classList.remove('border');
    }
    else if(scrollDown < breakpoint){
        nav.classList.remove('scrolled')
        navWrapper.classList.add('border')
    }
}


window.addEventListener('scroll', changeNav);

