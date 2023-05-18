
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds  = document.querySelector('.clouds');

const junp = () => { 
mario.classList.add('junp');

 setTimeout(() => {

    mario.classList.remove('junp');

}, 500);

}

const loop = setInterval(() => {
    
 const pipePosition = pipe.offsetLeft;
 const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

 if (pipePosition < 120 && pipePosition > 0  && marioPosition  < 80) {

      pipe.style.animation = 'none';
      pipe.style.left = '${pipePosition}px';

      mario.style.animation = 'none';
      mario.style.bottom = '${pipePosition}px';
     
      mario.src = "imgens/game-over.png"
      mario.style.width = '75px'
      
      clouds.src =  "imgens/morte.png"
      clouds.animation = "clouds-animation 120s infinite linear"

        
}

}, 10);

document.addEventListener('keydown', junp);
