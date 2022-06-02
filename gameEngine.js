function start(state, game) {

    game.createSplatoon(state.splatoon);

    window.requestAnimationFrame(gameLoop.bind(null, state, game));
};

function gameLoop() {
    const { splatoon } = state;
    const { splatoonElement } = game;

    //Main character movement
    if (state.keys.KeyD && splatoon.positionX < (game.gameScreen.offsetWidth - splatoon.width - splatoon.speed)) {
        splatoon.positionX += splatoon.speed;
    };
    if (state.keys.KeyA && splatoon.positionX > 1) {
        splatoon.positionX -= splatoon.speed;
    };
    if (state.keys.KeyW && splatoon.positionY > 1) {
        splatoon.positionY -= splatoon.speed;
    };
    if (state.keys.KeyS && splatoon.positionY < (game.gameScreen.offsetHeight - splatoon.height)) {
        splatoon.positionY += splatoon.speed;
    };

    //Rendersplatoon
    splatoonElement.style.left = splatoon.positionX + 'px';
    splatoonElement.style.top = splatoon.positionY + 'px';

    window.requestAnimationFrame(gameLoop.bind(null, state, game));



};