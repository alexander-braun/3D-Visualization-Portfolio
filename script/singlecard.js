
let unhideCardOnClick = function(){
  let expandElement = document.getElementsByClassName('btn-floating');
  for(let elem of expandElement){
    elem.addEventListener('click', function unhideTextBox(e) {
      let event = e.target;
      let parent = event.parentNode.parentNode;
      let unhideElement = parent.childNodes;
      for(elem of unhideElement){
        if(elem.className === 'cardContent hidden'){
          elem.classList.add("cardContentUnhide");
          e.target.classList.add('cross')
        }
        else if(elem.className ==='cardContent hidden cardContentUnhide'){
          elem.classList.remove("cardContentUnhide");
          e.target.classList.remove('cross')
        }
      }
    })
  }
}

let modal = document.getElementById('gridModal');
let imgTag = document.getElementById('clickedImage');

let openModal = function(e){
  let targetImageSrc = e.target.src;
  modal.classList.remove('closedModal');
  modal.classList.add('openModal');
  imgTag.classList.add('fadeIn');
  imgTag.src = targetImageSrc;
}

let openModalOnClick = function(){
  let images = document.getElementsByClassName('cardImage');
  for(let image of images){
    image.addEventListener('click', function(e){
      openModal(e);
    });
  }
}

modal.addEventListener('click', function(e){
    closeModalOnClick(e);
})

let closeModalOnClick = function(e){
  if(e.target.classList.contains('openModal') || e.target.id === 'clickedImage' || e.target.classList.contains('modalContent')){
    imgTag.classList.remove('fadeIn');
    imgTag.classList.add('fadeOut');
    modal.classList.add('closedModal');
    setTimeout(function removeTag(){
      modal.classList.remove('openModal');
      imgTag.classList.remove('fadeOut');
      imgTag.src = '';
    }, 600)
  }
}

