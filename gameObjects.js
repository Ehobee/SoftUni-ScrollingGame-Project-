function initGameObjects() {
    const playButton = document.querySelector('.game-start');
    const gameScreen = document.querySelector('.game-area');
    //return the game Dom
    return {
        playButton,
        gameScreen,
        createSplatoon(initialState) {
            const splatoonElement = document.createElement('div');
            splatoonElement.classList.add('splatoon');
            splatoonElement.style.width = initialState.width + 'px';
            splatoonElement.style.height = initialState.height + 'px';
            splatoonElement.style.left = initialState.startX + 'px';
            splatoonElement.style.top = initialState.startY + 'px';
            this.splatoonElement = splatoonElement;
            gameScreen.appendChild(splatoonElement);
        },
        createShot(splatoon, shotStats) {
            const shotElement = document.createElement('div');
            shotElement.classList.add('shot');
            shotElement.style.left = splatoon.positionX + splatoon.width + 'px';
            shotElement.style.top = splatoon.positionY + splatoon.height / 6.5 + 'px';
            shotElement.style.width = shotStats.width + 'px';
            shotElement.style.height = shotStats.height + 'px';
            gameScreen.appendChild(shotElement);
        },
        createSquid(stats) {
            const squidElement = document.createElement('div');
            squidElement.classList.add('squid');
            squidElement.style.width = stats.width + 'px';
            squidElement.style.height = stats.height + 'px';
            squidElement.style.left = game.gameScreen.offsetWidth - stats.width + 'px';
            squidElement.style.top = Math.random() * (game.gameScreen.offsetHeight - stats.height) + 'px';
            gameScreen.appendChild(squidElement);
        },
        createSquidLvl2(stats) {
            const squidElement = document.createElement('div');
            squidElement.classList.add('squidLvl2');
            squidElement.style.width = stats.width + 'px';
            squidElement.style.height = stats.height + 'px';
            squidElement.style.left = game.gameScreen.offsetWidth - stats.width + 'px';
            squidElement.style.top = Math.random() * (game.gameScreen.offsetHeight - stats.height) + 'px';
            gameScreen.appendChild(squidElement);
        },
        createSquidLvl3(stats) {
            const squidElement = document.createElement('div');
            squidElement.classList.add('squidLvl3');
            squidElement.style.width = stats.width + 'px';
            squidElement.style.height = stats.height + 'px';
            squidElement.style.left = game.gameScreen.offsetWidth - stats.width + 'px';
            squidElement.style.top = Math.random() * (game.gameScreen.offsetHeight - stats.height) + 'px';
            gameScreen.appendChild(squidElement);
        },
        createSquidLvl4(stats) {
            const squidElement = document.createElement('div');
            squidElement.classList.add('squidLvl4');
            squidElement.style.width = stats.width + 'px';
            squidElement.style.height = stats.height + 'px';
            squidElement.style.left = game.gameScreen.offsetWidth - stats.width + 'px';
            squidElement.style.top = Math.random() * (game.gameScreen.offsetHeight - stats.height) + 'px';
            gameScreen.appendChild(squidElement);
        }
    };
}
