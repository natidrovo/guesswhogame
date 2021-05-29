
const guesswho = new GuessWho(characters);

window.addEventListener('load', event => {
    let cards= '';
    let cardsSelection='';
    let cardsAdversary='';
    guesswho.shuffleCards();
    characters.forEach(pic => {
        cards += `<div class="card" id=${pic.img} style="background: url(img/${pic.img}) no-repeat;background-position: center;background-size: contain"><div class="name-char">${pic.name}</div></div>`;
        cards += `</div>`;
    });
    characters.forEach(pic => {
        cardsAdversary += `<div class="card adversary-card" id=${pic.img} style="background: url(img/${pic.img}) no-repeat;background-position: center;background-size: contain"></div>`;
        cardsAdversary += `</div>`;
    });
    characters.forEach(pic => {
        cardsSelection += `<div class="card" id="${pic.name}" onclick="guesswho.chooseYourCharacter(${pic.name})" style="background: url(img/${pic.img}) no-repeat;background-position: center;background-size: contain"> <div class="name-char">${pic.name}</div></div>`;
        cardsSelection += `</div>`;
    });

    

    // Add all the divs to the HTML
    document.querySelector('#cards').innerHTML = cards;
    document.querySelector('#cards-adversary').innerHTML = cardsAdversary;
    document.querySelector('.card-selection-container').innerHTML = cardsSelection;
})