breakCycle = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
window.confirm = function () {
    return true;
};

async function loop() {
    while (true) {   
        //wait until holy octahedrons get stable
        await sleep(180 * 1000);
        holyPolyhedronCheck(1); //1 2 3
    }
}