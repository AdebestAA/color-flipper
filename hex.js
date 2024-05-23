


let span = document.querySelector('span')
let button = document.querySelector('button')


let colorNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]


const generateRandomNumber = () => {
    return Math.floor(Math.random() * colorNum.length)
}

button.addEventListener("click", () => {
    let hexCode = "#"
    for (let i = 0; i < 6; i++) {
        let randomNo = generateRandomNumber()
        hexCode += colorNum[randomNo]
    }
    document.body.style.backgroundColor = hexCode;
    span.innerText = hexCode

})

