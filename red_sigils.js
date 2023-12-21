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
        var textArea = "nextYellowSigil";
        var text = document.getElementById(textArea).text;
        if (text == "e1.00e33") {
            await sleep(100);
            continue;
        }
        await sleep(100);
        sigilCheck(8); //6 7 8
        await sleep(100);
        i++;
    }
}