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
let time_container = document.querySelector(".timeContainer")
let score_container = document.querySelector(".scoreContainer")
let endGameContainer = document.querySelector("#endGameContainer")
let spanScore = document.querySelector("#score")
let palabraAleatoria = randomWords()
let time = 10
let score = 0
let palabraIngresada;
let timeInterval = setInterval(actualizarTiempo, 1000);
let cont = 1


//1
function randomWords() {
    let nroRandom = Math.floor(Math.random() * words.length)

    return words[nroRandom]
}

//3
function addToDom() {
    randomWord.textContent = palabraAleatoria
}
addToDom()

//evento tipo input

input.addEventListener("input", function () {
    palabraIngresada = input.value.toLocaleLowerCase()
    console.log(palabraIngresada);
    console.log(score);
    if (palabraIngresada == palabraAleatoria) {
        console.log("no entra");
        time += 3
        upDateScore()
        palabraIngresada = ""
        input.value = ""
        palabraAleatoria = randomWords()
        addToDom()
    }

})



//manipular el tiempo
function actualizarTiempo() {
    timeSpan.textContent = time-- + "s"
    console.log("actualizarTiempo");

    if (time === 0) {
        clearInterval(setInterval)
        time = 3
        console.log("gameOver");
        if (0 < cont) {
            gameOver()
            cont = 0
        }
    }

}

//updateScore
function upDateScore() {
    score++
    spanScore.textContent = score
}

//gameOver
function gameOver() {

    let titulo = document.createElement("h1")
    titulo.classList.add("tituloGameOver")
    titulo.textContent = "Te quedaste sin tiempo"

    let parrafo = document.createElement("p")
    parrafo.classList.add("scoreContainer")
    parrafo.textContent = `Tu puntaje es: ${score}`

    let boton = document.createElement("button")
    boton.classList.add("timeContainer")
    boton.textContent = `play again`

    boton.onclick = () => {
        location.reload()
    }

    endGameContainer.appendChild(titulo)
    endGameContainer.appendChild(parrafo)
    endGameContainer.appendChild(boton)
    main.classList.add("displayNone")

}