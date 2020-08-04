document.addEventListener('DOMContentLoaded',() => {
    //card options
    const cardArray = [
        {
            name : 'burger',
            img :'images/burger.png'
        },
        {
            name: 'burger',
            img:'images/burger.png'
        },
        {
            name: 'cheeseburger',
            img:'images/burger2.png'
        },
        {
            name: 'cheeseburger',
            img:'images/burger2.png'
        },
        {
            name: 'pizza',
            img:'images/pizza.png'
        },
        {
            name: 'pizza',
            img:'images/pizza.png'
        },
        {
            name: 'cream',
            img:'images/ice cream.png'
        }
    ]
     
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId =[]
    var cardsWon = []

    // create your board
    function createBoard(){
        for(let i = 0; i<cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src','images/blank2.png')
            card.setAttribute('data-id',i)
            card.addEventListener('click',flipcard)
            grid.appendChild(card)
        }
    }

//check for matches
function checkForMatch(){
    var cards =document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if(cardsChosen[0] === cardsChosen[1]){
        alert('you found a match')
        cards[optionOneId].setAttribute('src','images/white.png')
        cards[optionTwoId].setAttribute('src','images/white.png')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
        alert('sorry try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'Congratulation you found them all'
    }
}


// flip your card
function flipcard(){
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardsChosen.length === 2){
        setTimeout(checkForMatch, 500)
    }
}






    createBoard()




})
   



