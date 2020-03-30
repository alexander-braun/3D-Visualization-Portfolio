'use strict'

const currentPath = window.location.pathname;
if(currentPath === "/"){
  //Carousel
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {indicators: true, fullWidth: true, numVisible: 1, padding: 200});
    var prevButton = document.getElementsByClassName('movePrevCarousel');
    var nextButton = document.getElementsByClassName('moveNextCarousel');
    nextButton[0].addEventListener('click', function next() {
      instances[0].next(1);
    })
    prevButton[0].addEventListener('click', function previous() {
      instances[0].prev(1);
    })
  })

  //Modal
  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {inDuration: 500, outDuration: 500, opacity: 0.9})
    //Dynamically insert clicked Image into Modal
    var modalTriggers = document.getElementsByClassName('modal-trigger');
    for(let i = 0; i < modalTriggers.length; i++){
      modalTriggers[i].addEventListener('click', function(event){
        event.preventDefault();
        if(event.target.src){
          var modImage = document.getElementById('modImage');
          modalTriggers[i].href = '#modal1';
          modImage.src = event.target.src;
          modImage.addEventListener('click', function close() {
            instances[0].close();
          })
        }
      })
    }
  });
}