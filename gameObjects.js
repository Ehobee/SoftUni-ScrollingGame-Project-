function initGameObjects() {
    const playButton = document.querySelector('.game-start');
    const gameScreen = document.querySelector('.game-area');
//return the game Dom element objects
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
        createSquid(stats) {
            const squidElement = document.createElement('div');
            squidElement.classList.add('squid');
            squidElement.style.width = stats.width + 'px';
            squidElement.style.height = stats.height + 'px';
            squidElement.style.left = game.gameScreen.offsetWidth - stats.width + 'px';
            squidElement.style.top = Math.random() * (game.gameScreen.offsetHeight - stats.height) + 'px';
            gameScreen.appendChild(squidElement);
        }
    };
}
