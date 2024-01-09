breakCycle = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
window.confirm = function () {
    return true;
};
async function loop() {
    while (!breakCycle) {
        //"nextRedSigil" "nextOrangeSigil" "nextYellowSigil"
        var textArea = "nextRedSigil";
        var text = document.getElementById(textArea).text;
        // if (text <= "e1.00e21") {
        //     await sleep(100);
        //     continue;
        // }
        await sleep(50);
        sigilCheck(6); //6 7 8
        await sleep(100);
        i++;
    }
}