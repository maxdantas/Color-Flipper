//gerar números aleatórios dentro do escopo de colors para alterar a cor do background da página e o conteúdo de texto de color!

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function(){
    //pega um numero aleatorio entre 0 - 3 de colors[]
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}
