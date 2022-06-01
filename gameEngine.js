function start(state, game) {

    game.createSplatoon(state.splatoon);

    window.requestAnimationFrame(gameLoop.bind(null, state, game));
};

function gameLoop() {
    const { splatoon } = state;
    const { splatoonElement } = game;

    //Main character movement
    if (state.keys.KeyD) {
        splatoon.positionX += 5;
    } else if (state.keys.KeyA) {
        splatoon.positionX -= 5;
    } else if(state.keys.KeyW) {
        splatoon.positionY -= 5;
    } else if(state.keys.KeyS) {
        splatoon.positionY += 5
    };



    //Rendersplatoon
    splatoonElement.style.left = splatoon.positionX + 'px';
    splatoonElement.style.top = splatoon.positionY + 'px';
    

    window.requestAnimationFrame(gameLoop.bind(null, state, game));



};