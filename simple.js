let span = document.querySelector('span')
console.log(span);
let button = document.querySelector('button')


let colors = ["red", "yellow", "#FEC93B", "#A2D5F2", "#F9BF51"]


button.addEventListener("click", () => {
    let randomNo = generateRandomNumber()
    span.innerText = colors[randomNo]

    document.body.style.backgroundColor = colors[randomNo]

})

function generateRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}


