function start(state, game) {

    game.createSplatoon(state.splatoon);

    window.requestAnimationFrame(gameLoop.bind(null, state, game));
};

function gameLoop() {
    const { splatoon } = state;
    const { splatoonElement } = game;

    //Main character movement
    if (state.keys.KeyD) {
        splatoon.positionX += 2;
    };
    


    //Rendersplatoon
    splatoonElement.style.left = splatoon.positionX + 'px';

    window.requestAnimationFrame(gameLoop.bind(null, state, game));



};