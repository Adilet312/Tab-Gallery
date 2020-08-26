import './css/styles.css';
import img_lights from "./assets/img_lights_250x250.jpg";
import img_mountains from "./assets/img_mountains_250x250.jpg";
import img_nature from "./assets/img_nature_250x250.jpg";
import img_snow from "./assets/img_snow_250x250.jpg";
import img_lights_1_1000x250 from "./assets/img_lights_1_1000x250.jpg";
import img_mountains_1_1000x250 from "./assets/img_mountains_1_1000x250.jpg";
import img_nature_1_1000x250 from "./assets/img_nature_1_1000x250.jpg";
import img_snow_1_1000x250 from "./assets/img_snow_1_1000x250.jpg";
const images = function(){
  let pictures = document.querySelector('.pictures').children;
  for(let index = 0; index < pictures.length; index++){
    let img = document.createElement('img');
    if(index === 0){
        img.src = `${img_lights}`;
        img.id=`${index}`
    }
    else if(index === 1){
        img.src = `${img_mountains}`;
        img.id=`${index}`
    }
    else if(index === 2){
        img.src = `${img_nature}`;
        img.id=`${index}`;
    }
    else if(index ===3){
      img.src = `${img_snow}`;
      img.id=`${index}`;
    }
    else{
      img.src = "";
      img.id=`${index}`
    }
    pictures[index].appendChild(img);
  }

};
images();

function getLargePicture(id) {
  // Get the expanded image
  var img = document.querySelector('.bgPicture img');
  // Use the same src in the expanded image as the image being clicked on from the grid
  if(Number(id) === 0){
    img.setAttribute('src',`${img_lights_1_1000x250}`);

  }
  else if(Number(id) === 1){
    img.src = `${img_mountains_1_1000x250}`;
  }
  else if(Number(id) === 2){
    img.src = `${img_nature_1_1000x250}`;
  }
  else if(Number(id)===3){
    img.src = `${img_snow_1_1000x250}`;
  }

  // Show the container element (hidden with CSS)
  img.parentElement.style.display = "block";
}
document.querySelector('.pictures').addEventListener("click", function(e){
  getLargePicture(e.target.id)
  // let images = document.querySelectorAll('.pictures').children;
  // images[e.target.id].style.background = "yellow";

},false);


















/*
let overlay =  document.createElement('div');
overlay.className = "overlayClass";
overlay.style.position = "absolute";
overlay.style.top = window.pageYOffset + "px";
overlay.style.left =  window.pageXOffset + "px";
overlay.style.background = 'rgba(0,0,0,0.7)';
overlay.style.width = window.innerWidth + "px";
overlay.style.height = window.innerHeight + "px";
*/
