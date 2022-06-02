function initState() {
    let startX = Math.floor(Math.random() * 1000);
    let startY = Math.floor(Math.random() * 500);

    const state = {
        player: "Ehobee",
        splatoon: {
            width: 130,
            height: 153,
            positionX: startX,
            positionY: startY,
            speed: 10
        },
        keys: {}
    };

    return state;
}