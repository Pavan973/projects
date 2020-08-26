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
        },
        {
            name: 'cream',
            img:'images/ice cream.png'
        },
        {
            name: 'plate',
            img:'images/plate.png'
        },
        {
            name: 'plate',
            img:'images/plate.png'
        },
        {
            name: 'piza',
            img:'images/piza.png'
        },
        {
            name: 'piza',
            img:'images/piza.png'
        },
        {
            name: 'akshar',
            img:'images/akshar.png'
        },
        {
            name: 'akshar',
            img:'images/akshar.png'
        },
        {
            name: 'games',
            img:'images/games.png'
        },
        {
            name: 'games',
            img:'images/games.png'
        },
        {
            name: 'pixabay',
            img:'images/pixabay.png'
        },
        {
            name: 'pixabay',
            img:'images/pixabay.png'
        },
        {
            name: 'red',
            img:'images/red.png'
        },
        {
            name:  'red',
            img:'images/red.png'
        },
        {
            name:  'player',
            img:'images/player.png'
        },
        {
            name:  'player',
            img:'images/player.png'
        },
        {
            name: 'heart',
            img: 'images/heart.png'
        },
        {
            name: 'heart',
            img: 'images/heart.png'
        },
        {
            name: 'albari',
            img: 'images/albari.png'
        },
        {
            name: 'albari',
            img: 'images/albari.png'
        },
        {
            name: 'chess',
            img: 'images/chess.png'
        },
        {
            name: 'chess',
            img: 'images/chess.png'
        },
        {
            name: 'blank1',
            img: 'images/blank1.png'
        },
        {
            name: 'blank1',
            img: 'images/blank1.png'
        },
        {
            name: 'blank2',
            img: 'images/blank2.png'
        },
        {
            name: 'blank2',
            img: 'images/blank2.png'
        },
        {
            name: 'foto',
            img: 'images/foto.png'
        },
        {
            name: 'foto',
            img: 'images/foto.png'
        },
        {
            name: 'river',
            img: 'images/river.png'
        },
        {
            name: 'river',
            img: 'images/river.png'
        },
        {
            name: 'sea',
            img: 'images/sea.png'
        },
        {
            name: 'sea',
            img: 'images/sea.png'
        },

        {
            name: 'soccer',
            img: 'images/soccer.png'
        },
        {
            name: 'river',
            img: 'images/soccer.png'
        },
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
            card.setAttribute('src','images/door.png')
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
        cards[optionOneId].setAttribute('src','images/yes.png')
        cards[optionTwoId].setAttribute('src','images/yes.png')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src','images/error.png')
        cards[optionTwoId].setAttribute('src','images/error.png')
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
   



