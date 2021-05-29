const characters = [{
    name: "tim",
    gender: "man",
    hair: "bald",
    beard: false,
    glasses: true,
    skin: "black",
    img: 'tim.svg',
    visibility:true,
  },
  {
    name: "maria",
    gender: "woman",
    hair: "blonde",
    beard: false,
    glasses: true,
    skin: "white",
    img: 'maria.svg',
    visibility:true,
  },
  {
    name: "luca",
    gender: "man",
    hair: "darkbrown",
    beard: false,
    glasses: false,
    skin: "white",
    img: 'luca.svg',
    visibility:true,
  },
  {
    name: "elena",
    gender: "woman",
    hair: "darkbrown",
    beard: false,
    glasses: false,
    skin: "brown",
    img: 'elena.svg',
    visibility:true,
  },
  {
    name: "liza",
    gender: "woman",
    hair: "darkbrown",
    beard: false,
    glasses: false,
    skin: "black",
    img: 'liza.svg',
    visibility:true,
  },
  {
    name: "lucie",
    gender: "woman",
    hair: "red",
    beard: false,
    glasses: true,
    skin: "white",
    img: 'lucie.svg',
    visibility:true,
  },
  {
    name: "marta",
    gender: "woman",
    hair: "blonde",
    glasses: false,
    beard: false,
    skin: "white",
    img: 'marta.svg',
    visibility:true,

  },
  {
    name: "mario",
    gender: "man",
    hair: "bald",
    glasses: false,
    beard: true,
    skin: "white",
    img: 'mario.svg',
    visibility:true,
  },
  {
    name: "chris",
    gender: "man",
    hair: "blonde",
    glasses: true,
    beard: true,
    skin: "white",
    img: 'chris.svg',
    visibility:true,
  },
  {
    name: "peter",
    gender: "man",
    hair: "brown",
    glasses: false,
    beard: true,
    skin: "white",
    img: 'peter.svg',
    visibility:true,
  },
  {
    name: "max",
    gender: "man",
    hair: "blonde",
    glasses: false,
    beard: false,
    skin: "white",
    img: 'max.svg',
    visibility:true,
  },
  {
    name: "pat",
    gender: "man",
    hair: "darkbrown",
    glasses: true,
    beard: false,
    skin: "brown",
    img: 'pat.svg',
    visibility:true,
  },
  {
    name: "jacob",
    gender: "man",
    hair: "darkbrown",
    glasses: false,
    beard: false,
    skin: "brown",
    img: 'jacob.svg',
    visibility:true,
  },
  {
    name: "selena",
    gender: "woman",
    hair: "red",
    glasses: false,
    beard: false,
    skin: "brown",
    img: 'selena.svg',
    visibility:true,
  },
  {
    name: "lorena",
    gender: "woman",
    hair: "darkbrown",
    glasses: true,
    beard: false,
    skin: "brown",
    img: 'lorena.svg',
    visibility:true,
  },
  {
    name: "natalie",
    gender: "woman",
    hair: "darkbrown",
    glasses: true,
    beard: false,
    skin: "black",
    img: 'natalie.svg',
    visibility:true,
  }
]


//función para barajar las cartas
class GuessWho {
  constructor(characters) {
    this.characters = characters;
    this.characterSelected='';
    this.characterSelectdByComputer='';

  }
  
  shuffleCards() {
    for (let i = this.characters.length; i > 0; i--) {
      let random = Math.floor(Math.random() * i--);
      let temp = this.characters[i];
      this.characters[i] = this.characters[random];
      this.characters[random] = temp;
    }
  }

  startGame(characters) {
    const modalToShow = document.getElementById('welcome');
    modalToShow.classList.add('hidden');
    const mainModal = document.getElementById('cards-selection');
    mainModal.classList.remove('hidden');
  }

  askAQuestion() {
    const modalToShow = document.getElementById('main-guess-box');
    modalToShow.classList.remove('hidden');
  }
  chooseYourCharacter(character) {
    const mainModal = document.getElementById('cards-selection');
    mainModal.classList.add('hidden');
    const cardChar= document.getElementById("card-char");
    cardChar.parentNode.replaceChild(character.cloneNode(true), cardChar);
    document.querySelector('#selected-name-char').innerHTML = character.id;
    const filteredChar= this.characters.filter(function(_character) {
      return _character.name===character.id
    }) 
    this.player= new Player(filteredChar[0], this.characters);
    let computerCards= this.characters.splice(filteredChar, 1); 
    const selectedCharByComputer = function (deck) {
      return deck[Math.floor(Math.random() * deck.length)]
    }
    const computerChar= selectedCharByComputer(computerCards);
    this.computer= new Computer (computerChar, this.characters)
  }
  
  askMainQuestion(id) {
    if (id==="gender"||id==="hair"||id==="skin"){
    const modalToShow = document.getElementById(`guess-box-${id}`);
    modalToShow.classList.remove('hidden');
    const mainModal= document.getElementById('main-guess-box');
    mainModal.classList.add('hidden')}
    else {
      const modalToShow = document.getElementById(`final-guess-box`);
      modalToShow.classList.remove('hidden');
      const mainModal= document.getElementById('main-guess-box');
      mainModal.classList.add('hidden');
      document.querySelector('#char-property').innerHTML = `Does the character wear ${id}`;
    }
  }
  
  askValueQuestion(id,value) {
    if (id==="hair"||id==="skin"){
    const modalToShow = document.getElementById(`final-guess-box`);
    modalToShow.classList.remove('hidden');
    const mainModal= document.getElementById(`guess-box-${id}`);
    mainModal.classList.add('hidden')
    this.computer.guess(id, value)
   // const questionMade=guess(`${id}`,`${value}`)
    document.querySelector('#char-property').innerHTML = `Has the character ${value} ${id}`;
    //console.log (questionMade)
  }
  else {
    const modalToShow = document.getElementById(`final-guess-box`);
    modalToShow.classList.remove('hidden');
    const mainModal= document.getElementById(`guess-box-${id}`);
    mainModal.classList.add('hidden')
   // const questionMade=guess(`${id}`,`${value}`)
    document.querySelector('#posible-value').innerHTML = `It is a ${value}`;
    //console.log (questionMade)
  }
  }
  inputToSolve() {
    const modalToShow = document.getElementById('input-to-solve');
    modalToShow.classList.remove('hidden');
    const isItTheRightName = document.getElementById('character-right-name');
    this.character;
    //const theRightName = function ()
    //  if (isItTheRightName===chooseYourCharacter(computerIdCard)){
    //  return true
    //}

  }
  
  discardChar(){
    const discardedCards = document.querySelector(`.card`);
    discardedCards.classList.add('card-discarded');
  }
  
}

class Player {
  constructor(character, deck){
    this.character= character;
    this.deck = deck;
  }

  // este value pertenece a la caracteristica del persona del jugador contrario


  guess(prop, value) {
    return this.character[prop]===value
  }

}

class Computer extends Player{
  constructor(character, deck){
    super (character, deck);
  }
  guess(prop, value) {
    return this.deck.filter(character => {
      return (character[prop] === value);
    });
  }

}
