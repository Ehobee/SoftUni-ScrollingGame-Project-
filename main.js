const playButton = document.querySelector('.game-start');
const gameScreen = document.querySelector('game-area');

playButton.addEventListener('click', ()=> {
playButton.classList.add('hidden');
gameScreen.style.display = 'block';
})