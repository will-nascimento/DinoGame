const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        if(!isJumping) {
        jump();
        } 
    };
};

function jump (){
    isJumping = true;   
    let upInterval = setInterval(() => {              
        if (position>=150){  //aqui muda a altura do pulo do dino.
            clearInterval(upInterval);
//descendo
            let downInterval = setInterval(()=> {
                if (position <=0){
                clearInterval(downInterval);
                isJumping=false;
                } else {
                position -=20;
                dino.style.bottom = position + 'px';
                }
            },30); //modifica a velocidade do pulo
        } else {
//subindo    
        position += 20;
        dino.style.bottom = position + 'px';
        }
    },30); //modifica a velocidade do pulo
}

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 5000; //aqui muda o tempo com que o cacto aparece na tela.

    cactus.classList.add('cactus');
    cactus.style.left=1000+'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
            if(cactusPosition < -60){     
                clearInterval(leftinterval);
                background.removeChild(cactus);
            } else if (cactusPosition >0 && cactusPosition <60 && position <60) {
                //fazendo o game over            
                clearInterval(leftInterval);
                document.body.innerHTML = '<h1 class= "gameover">FIM DE JOGO</h1> <h2 class="gameover">Atualize a página para recomeçar</h2>';
            } else {    
                cactusPosition -= 10;    //alterar aqui para mudar a velocidade do cacto.
                cactus.style.left = cactusPosition + 'px';
            }
    },20);

    setTimeout(createCactus, randomTime);
}



createCactus();

document.addEventListener('keyup',handleKeyUp);


