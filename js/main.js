//getting song writer data

const atom = document.querySelector('#atomWriters'),
      darkSide = document.querySelector('#darkSideWriters'),
      wishYou = document.querySelector('#wishYouWriters'),
      animals = document.querySelector('#animalsWriters'),
      wall = document.querySelector('#wallWriters'),
      writersAHM = document.querySelector('.writers').querySelectorAll('p');
      writersDS = darkSide.querySelector('.writers').querySelectorAll('p');
      writersWY = wishYou.querySelector('.writers').querySelectorAll('p');
      writersA = animals.querySelector('.writers').querySelectorAll('p');
      writersW = wall.querySelector('.writers').querySelectorAll('p');


setWriterInfo(data);

function setWriterInfo(data) {
    writersAHM[0].innerHTML = data.atomWriters[0];
    writersAHM[1].innerHTML = data.atomWriters[1];
    writersAHM[2].innerHTML = data.atomWriters[2];
    writersAHM[3].innerHTML = data.atomWriters[3];
  
    writersDS[0].innerHTML = data.darkSideWriters[0];
    writersDS[1].innerHTML = data.darkSideWriters[1];
    writersDS[2].innerHTML = data.darkSideWriters[2];
    writersDS[3].innerHTML = data.darkSideWriters[3]; 

    writersWY[0].innerHTML = data.wishYouWriters[0];
    writersWY[1].innerHTML = data.wishYouWriters[1];
    writersWY[2].innerHTML = data.wishYouWriters[2];
    writersWY[3].innerHTML = data.wishYouWriters[3]; 

    writersA[0].innerHTML = data.animalsWriters[0];
    writersA[1].innerHTML = data.animalsWriters[1];
    writersA[2].innerHTML = data.animalsWriters[2];
    writersA[3].innerHTML = data.animalsWriters[3]; 

    writersW[0].innerHTML = data.wallWriters[0];
    writersW[1].innerHTML = data.wallWriters[1];
    writersW[2].innerHTML = data.wallWriters[2];
    writersW[3].innerHTML = data.wallWriters[3];
}

//hover to reveal song writers

var button = document.querySelectorAll('.hover');
    writers = document.querySelectorAll('.writers');

// for(var i=0; i < button.length; i++) {
//   button.addEventListener('mouseover', reveal, false);
// }

button.forEach(btn => {
  btn.addEventListener('click', function(){
    this.parentElement.querySelector('.writers').classList.toggle('hidden');
    // console.log(['clicked', i]);
    // writers[i].classList.toggle('hidden');
  })
});


//Trying to have svg in object load, add class of animation.....

// var icons = document.querySelector('.icons');


// document.addEventListener('load', function(){
//     icons.querySelector('#Floyd').classList.add('animated slideInDown');
//     console.log(icons.innerHTML);
// });

// var icons = document.querySelector('#object');
// icons.onload = function(){
//   svg = icons.contentDocument;
//   svg.querySelector('#Floyd').className = "animated slideInDown";
// }


// icons.addEventListener('load', ani, false);
// function ani(){
//   // icons.querySelector('#Floyd').classList.add('animated slideInDown');
//   console.log(icons.querySelector('#Floyd'));
// }
