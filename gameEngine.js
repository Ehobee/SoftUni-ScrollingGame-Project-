function start(state, game) {

    game.createSplatoon(state.splatoon);

    window.requestAnimationFrame(gameLoop.bind(null, state, game));
};

function gameLoop(state, game, timestamp) {
    const { splatoon } = state;
    const { splatoonElement } = game;

    mainCharacterMovement(state, game);
    //Rendersplatoon
    splatoonElement.style.left = splatoon.positionX + 'px';
    splatoonElement.style.top = splatoon.positionY + 'px';

    //Spawn squids
    if (timestamp > state.squidStats.nextSpawnTimestamp) {
        game.createSquid(state.squidStats);
        state.squidStats.nextSpawnTimestamp = timestamp + Math.random() * state.squidStats.maxSpawnInterval
    };


    if(state.keys.Space) {
        game.createShot(splatoon, state.shotStats);
    };

    //Move squids
    document.querySelectorAll('.squid').forEach(squid => {
        let positionX = parseInt(squid.style.left);

        if (positionX > 0) {
            squid.style.left = positionX - state.squidStats.speed + 'px';
        } else {
            squid.remove();
        }
    });

    window.requestAnimationFrame(gameLoop.bind(null, state, game));
};

function mainCharacterMovement(state, game) {
    const { splatoon } = state;

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
    if (state.keys.KeyS && splatoon.positionY < (game.gameScreen.offsetHeight - splatoon.height - splatoon.speed)) {
        splatoon.positionY += splatoon.speed;
    };

}