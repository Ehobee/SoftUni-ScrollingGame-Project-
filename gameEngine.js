function start(state, game) {

    game.createSplatoon(state.splatoon);

    window.requestAnimationFrame(gameLoop.bind(null, state, game));
};

function gameLoop() {
    console.log('start')
    window.requestAnimationFrame(gameLoop.bind(null, state, game));
};