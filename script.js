const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
];
let divContainer = document.querySelector(".container")
let main = document.querySelector(".main")
let h2 = document.querySelector("h2")
let p = document.querySelector("p")
let randomWord = document.querySelector("#randomWord")
let input = document.querySelector("input")
let timeSpan = document.querySelector("#timeSpan")
let time_container = document.querySelector(".time-container")
let score_container = document.querySelector(".score-container")
let end_game_container = document.querySelector("#end-game-container")
let spanScore = document.querySelector("#score")
let palabraAleatoria = randomWords()
let time = 10
let score = 0
let palabraIngresada;
let timeInterval = setInterval(actualizarTiempo, 1000);


//1
function randomWords() {
    let nroRandom = Math.floor(Math.random() * (words.length + 1))
    return words[nroRandom]

}
// randomWords()

//3
function addToDom() {
    randomWord.textContent = palabraAleatoria
}
addToDom()

//evento tipo input
input.addEventListener("input", function (e) {
    console.log(e);
    palabraIngresada = input
    if (palabraIngresada == palabraAleatoria) {
        time += 3
        input.textContent = ""
        console.log(time);
        addToDom()
        upDateScore()
    }
})

//manipular el tiempo
function actualizarTiempo() {


    timeSpan.textContent = time-- + "s"
    console.log("chau");

    if (time === 0) {
        console.log("hola");
        clearInterval(setInterval)
        gameOver()
    }
}

//Funciones
//updateScore
function upDateScore() {
    score++
    spanScore.textContent = score
}

//gameOver
function gameOver() {
    let titulo = document.createElement("h1")
    titulo.textContent = "Te quedaste sin tiempo"
    let parrafo = document.createElement("p")
    parrafo.textContent = `tu puntaje: ${score}`
    let boton = document.createElement("button")
    boton.textContent = `play again`
    boton.onclick = () => {
        location.reload
    }
    end_game_container.tagName

}