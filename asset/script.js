//mobile
document.addEventListener('DOMContentLoaded', function() {
  var images = document.querySelectorAll('.colorI');

  function changeColor(color) {
      var mobile = document.getElementById('mobile');
      mobile.style.backgroundColor = color;
  }

  images.forEach(function(image) {
      image.addEventListener('click', function() {
          var color = this.getAttribute('data-color');
          changeColor(color);
      });
  });
});

//dark mode

//const btn=document.getElementById('btn');

//btn.addEventListener('click', () => {


   // document.getElementById('ground').classList.toggle('colorchange');
    //document.getElementById('add1').classList.toggle('fontcolor');
   // document.getElementById('add2').classList.toggle('fontcolor');


//})







//Acordion
const accordion = document.getElementsByClassName('container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}




//starRating

const stars = document.querySelectorAll(".stars i");
stars.forEach((item, index1) => {
  item.addEventListener("click", () => {
        stars.forEach((item, index2) => {
      index1 >= index2 ? item.classList.add("fontcolor") : item.classList.remove("fontcolor");
    });
  });
});



//


const toggle = document.querySelector("#toggle");
toggle.addEventListener("click", modeSwitch);

let isLight = true;

function modeSwitch() {
  isLight = !isLight;
  
  isLight ? toggle.innerText = "🌞" : toggle.innerText = " 🌙 ";
  
 document.getElementById('ground').classList.toggle('colorchange');
    document.getElementById('add1').classList.toggle('fontcolor');
   document.getElementById('add2').classList.toggle('fontcolor');
}
