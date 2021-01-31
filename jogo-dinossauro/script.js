// Variável dino que guarda um documento que é chamado pela classe dino.

const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;

function handleKeyUp(Event) {
    if(Event.keyCode === 32){
        if (!isJumping) {
            jump();
        }   
    }
}

function jump() {
    let  position = 0;

    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);
    
    // Dinossauro Descendo
    let downInterval = setInterval(() => {
        if (position <= 0) {
            clearInterval(downInterval);
            isJumping = false;
        } else {
            position -= 20;
            dino.style.bottom = position + 'px';
            }
        }, 20);
    } else {
    // Dinossauro Subindo
        position += 20;
        dino.style.bottom = position + 'px';
        }
    }, 20);
}

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);
}

createCactus();
document.addEventListener('keyup', handleKeyUp);