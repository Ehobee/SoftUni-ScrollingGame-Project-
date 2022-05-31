function initState() {
    const state = {
        player: "Ehobee",
        splatoon: {
            width: 130,
            height: 153,
            startX: Math.floor(Math.random() * 1000),
            startY:Math.floor(Math.random() * 500)
        }
    };

    return state;
}