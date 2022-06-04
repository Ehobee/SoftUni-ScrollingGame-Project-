function initState() {
    let startX = Math.floor(Math.random() * 1000);
    let startY = Math.floor(Math.random() * 500);
    //return the Dynamic object of the game elements/objects
    const state = {
        player: "Ehobee",
        splatoon: {
            width: 130,
            height: 153,
            positionX: startX,
            positionY: startY,
            speed: 10
        },
        shotStats: {
            width: 25,
            height: 25,
            speed: 10
        },
        squidStats: {
            width: 60,
            height: 60,
            nextSpawnTimestamp: 0,
            maxSpawnInterval: 1500,
            speed: 5
        },
        keys: {
            KeyA: false,
            KeyW: false,
            KeyS: false,
            KeyD: false,
            Space: false
        }
    };

    return state;
}