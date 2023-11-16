breakCycle = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function loop() {
    while (!breakCycle) {
        fireMaxAll();
        await sleep(1000);
        i++;
        console.log("i = " + i);
    }
}