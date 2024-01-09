breakCycle = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
window.confirm = function () {
    return true;
};

async function stay(text, sigil) {
    //"nextRedSigil" "nextOrangeSigil" "nextYellowSigil"
    //var text = document.getElementById(text).text;
    await sleep(50);
    sigilCheck(sigil); //6 7 8
    await sleep(100);
}

async function loop() {
    while (true) {
        await sleep(3000);
        for (var i = 0; i < 8; i++) {
            await sleep(50);
            sigilCheck(8); //6 7 8
            await sleep(300);
            await sleep(50);
            sigilCheck(7); //6 7 8
            await sleep(300);
            await sleep(50);
            sigilCheck(6); //6 7 8
            await sleep(300);
            await sleep(100);
        }
       
        //wait until holy octahedrons get stable
        await sleep(60 * 1000);
        holyPolyhedronCheck(1); //1 2 3
    }
}