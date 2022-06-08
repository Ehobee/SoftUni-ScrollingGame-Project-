function start(state, game) {
    game.createSplatoon(state.splatoon);
    window.requestAnimationFrame(gameLoop.bind(null, state, game));
};

function gameLoop(state, game, timestamp) {
    const { splatoon } = state;
    const { splatoonElement } = game;
    const gameOverScreen = document.querySelector('.game-over');
    const shotSound = new Audio('sf_laser_14.mp3');

    mainCharacterMovement(state, game);
    //Render splatoon
    splatoonElement.style.left = splatoon.positionX + 'px';
    splatoonElement.style.top = splatoon.positionY + 'px';



    //Spawn squids
    if (timestamp > state.squidStats.nextSpawnTimestamp) {
        game.createSquid(state.squidStats);
        state.squidStats.nextSpawnTimestamp = timestamp + Math.random() * state.squidStats.maxSpawnInterval
    };

    if (state.keys.Space) {

        //Delay shots - bug fixed
        if (timestamp > state.shotStats.nextShotTimestamp) {
            game.createShot(splatoon, state.shotStats);
            shotSound.play();
            state.shotStats.nextShotTimestamp = timestamp + state.shotStats.maxShotInterval;
        };
    };



    //Move squids
    let squids = document.querySelectorAll('.squid');
    squids.forEach(squid => {
        let positionX = parseInt(squid.style.left);


        //Detect collision with character
        if (detectCollision(splatoonElement, squid)) {
            state.gameOver = true;
        };

        if (positionX > 0) {
            squid.style.left = positionX - state.squidStats.speed + 'px';
        } else {
            squid.remove();
        }
    });

    //Move shots
    document.querySelectorAll('.shot').forEach(shot => {
        let positionX = parseInt(shot.style.left);

        //Detect collision between squids and shots
        squids.forEach(squid => {
            if (detectCollision(squid, shot)) {
                squid.remove();
                shot.remove();
            }
        });

        if (positionX > game.gameScreen.offsetWidth) {
            shot.remove();
        } else {
            shot.style.left = positionX + state.shotStats.speed + 'px';
        }
    });

    if (state.gameOver) {
        splatoonElement.remove();
        gameOverScreen.classList.remove('hidden');
        // Resets the game - google
        gameOverScreen.addEventListener('click', () => {
            window.location.reload();
        });
    } else {
        window.requestAnimationFrame(gameLoop.bind(null, state, game));
    };
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

};

function detectCollision(objectA, objectB) {
    let firstObj = objectA.getBoundingClientRect();
    let secondObj = objectB.getBoundingClientRect();

    let hasCollision = !(firstObj.top > secondObj.bottom || firstObj.bottom < secondObj.top || firstObj.right < secondObj.left || firstObj.left > secondObj.right);
    return hasCollision;
};