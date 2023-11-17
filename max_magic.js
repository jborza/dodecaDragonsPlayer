breakCycle = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function loop() {
    while (!breakCycle) {
        darkMagicUpgradeBuyMax();
        magicUpgradeBuyMax();
        await sleep(1000);
        i++;
    }
}