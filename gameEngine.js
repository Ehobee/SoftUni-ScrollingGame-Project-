function start(state, game) {

    window.requestAnimationFrame(gameLoop.bind(null, game, state));
};

function gameLoop() {
    console.log('start')
    window.requestAnimationFrame(gameLoop.bind(null, game, state));
};