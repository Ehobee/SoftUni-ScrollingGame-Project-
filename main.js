let state = initState();
let game = initGameObjects();

const availableKeys = ['KeyA', 'KeyS', 'KeyW', 'KeyD'];

game.playButton.addEventListener('click', () => {
    game.playButton.classList.add('hidden');
    game.gameScreen.classList.remove('hidden');

    //start game

    start(state, game);

    //key registration
    document.addEventListener('keydown', (e) => {
        if (availableKeys.includes(e.code)) {
            state.keys[e.code] = true;
        }


    });

    document.addEventListener('keyup', (e) => {
        if (availableKeys.includes(e.code)) {
            state.keys[e.code] = false;
        }
    });
});