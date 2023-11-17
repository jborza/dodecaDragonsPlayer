breakCycle = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function loop() {
    while (!breakCycle) {
        darkMagicUpgradeBuyMax();
        magicUpgradeBuyMax();
        for (let i = 0; i < 4; i++)
            dragonFeed();
        await sleep(1000);
        i++;
    }
}