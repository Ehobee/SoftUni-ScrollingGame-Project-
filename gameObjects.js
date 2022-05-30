function initGameObjects() {
    const playButton = document.querySelector('.game-start');
    const gameScreen = document.querySelector('.game-area');

    return {
        playButton,
        gameScreen,
        createSplatoon(initialState) {
            let splatoonElement = document.createElement('div');
            splatoonElement.classList.add('splatoon');

            splatoonElement.style.width = initialState.width + 'px';
            splatoonElement.style.height = initialState.height + 'px';

            splatoonElement.style.left = initialState.startX + 'px';
            splatoonElement.style.top = initialState.startY + 'px';

            this.splatoonElement = splatoonElement;

            gameScreen.appendChild(splatoonElement);

            return splatoonElement;
        }
    };
}
