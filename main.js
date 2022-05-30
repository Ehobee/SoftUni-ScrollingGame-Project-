let state = initState();
let game = initGameObjects();

game.playButton.addEventListener('click', () => {
    game.playButton.classList.add('hidden');
    game.gameScreen.classList.remove('hidden');
});