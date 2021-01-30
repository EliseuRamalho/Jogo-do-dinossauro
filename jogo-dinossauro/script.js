// Variável dino que guarda um documento que é chamado pela classe dino.

const dino = document.querySelector('.dino');

function handleKeyUp(Event) {
    if(Event.keyCode === 32){
        jump();
    }
}

function jump() {
    let  position = 0;

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);
    
    // Dinossauro Descendo
    let downInterval = setInterval(() => {
        if (position <= 0) {
            clearInterval(downInterval);
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

document.addEventListener('keyup', handleKeyUp);