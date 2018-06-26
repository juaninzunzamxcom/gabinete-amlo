/*const card1 = document.querySelector('#tarjeta1');

card1.addEventListener( 'click', function() {
  card1.classList.toggle('is-flipped');
});

const card2 = document.querySelector('#tarjeta2');

card2.addEventListener( 'click', function() {
  card2.classList.toggle('is-flipped');
});

const card3 = document.querySelector('#tarjeta3');

card3.addEventListener( 'click', function() {
  card3.classList.toggle('is-flipped');
});

const card4 = document.querySelector('#tarjeta4');

card4.addEventListener( 'click', function() {
  card4.classList.toggle('is-flipped');
});*/

var cards = document.getElementsByClassName('tarjeta');

for(i = 0; i < cards.length; i++) {
  var card = cards[i];
  card.addEventListener( 'click', function() {
    this.classList.toggle('is-flipped');
  });
}












