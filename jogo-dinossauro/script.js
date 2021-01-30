// Variável dino que guarda um documento que é chamado pela classe dino.

const dino = document.querySelector('.dino');

function handleKeyUp(Event) {
    if(Event.keyCode === 32){
        console.log('A tecla espaço foi clicada!');
    }
}

document.addEventListener('keyup', handleKeyUp);