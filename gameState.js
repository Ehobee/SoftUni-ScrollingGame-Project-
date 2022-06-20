function initState() {
    let startX = Math.floor(Math.random() * 1000);
    let startY = Math.floor(Math.random() * 500);
    //return the Dynamic object of the game elements/objects
    const state = {
        player: "Ehobee",
        gameOver: false,
        highScore: 0,
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
            speed: 10,
            nextShotTimestamp: 0,
            maxShotInterval: 300, 
        },
        squidStats: {
            width: 60,
            height: 60,
            nextSpawnTimestamp: 0,
            maxSpawnInterval: 1500,
            speed: 5
        },
        squidStatsLvl2: {
            width: 95,
            height: 61,
            nextSpawnTimestamp: 0,
            maxSpawnInterval: 1300,
            speed: 7
        },
        squidStatsLvl3: {
            width: 95,
            height: 79,
            nextSpawnTimestamp: 0,
            maxSpawnInterval: 1200,
            speed: 7
        },
        squidStatsLvl4: {
            width: 97,
            height: 81,
            nextSpawnTimestamp: 0,
            maxSpawnInterval: 1000,
            speed: 8
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