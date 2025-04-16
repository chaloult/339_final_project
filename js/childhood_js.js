const game_cards = document.querySelectorAll('.flip_card');
for (let i = 0; i < game_cards.length; i++) {
    game_cards[i].addEventListener('click', function () {
        this.classList.toggle('flipped');
    });

    game_cards[i].addEventListener('focus', function() {
        this.classList.toggle('flipped');
    })
}