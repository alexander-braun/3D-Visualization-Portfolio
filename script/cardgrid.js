'use strict'

// Find Selected Option from Filter Input
let grid = document.getElementById('imageGrid');
let checkInstances = function (){
      let optionSelected;
      var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems, {})[0];
      for(let i = 0; i < instances.$selectOptions.length; i++){
        if(instances.$selectOptions[i].selected){
            optionSelected = instances.$selectOptions[i].textContent;
        }
      }
      return optionSelected;
    }

    // Filter according to Json options
let insetText = function (json){
  //remove elements that are already there with while loop
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
  let optionSelected = checkInstances();
  for(let elem in json){
    if(json[elem].options.includes(optionSelected) || optionSelected === 'Categories'){
        let el = document.createElement('div');
        el.id = json[elem].pathName;
        el.classList.add('col','s12', 'm12', 'l6', 'card-container');
        // Set Animation Attributes AOS
        el.setAttribute('data-aos', `fade-up`);
        el.setAttribute('data-aos-duration', '1500')
        el.setAttribute('data-aos-anchor-placement', 'top-bottom')
        el.innerHTML =
          `<div class="">
            <div class="card-elements z-depth-2">
              <div class="cardImage">
                  <img class="" alt="${json[elem].imageContent}" src="./img/pictures/${json[elem].pathName}">
              </div>
              <a class="btn-floating btn-large waves-effect waves-light red darken-2 hidden btn-anim z-depth-3">
                <i class="material-icons">add</i>
              </a>
              <div class="cardContent hidden">
                  <p class="imageFor">${json[elem].imageFor}</p>
                  <p class="imageContent">${json[elem].imageContent}</p>
                  <p class="imageCategory">${json[elem].imageCategory}</p>
              </div>
            </div>
          </div>`
        grid.appendChild(el);
    }
  }
}

// Get Json and execute
let jsonParse = function(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let resp = JSON.parse(xhttp.responseText);
        let json = resp.images;
        insetText(json);
        unhideCardOnClick();
        openModalOnClick();
      }
  };
  xhttp.open("GET", "./Json/images.json", true);
  xhttp.send();
}

// Change Filtermask on click
document.addEventListener('click', function() {
  let dropdownLinks = document.querySelectorAll('#filterOptions li');
  for(let i of dropdownLinks){
    i.addEventListener('click', jsonParse)
  }
})

jsonParse()
