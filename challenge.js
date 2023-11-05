let scoreToReset = 8;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

breakCycle = false;
async function loop() {
    while (!breakCycle) {
        produceGold();
        var scoreToGet = document.getElementById("magicChallengeButton").textContent.replace(/[a-zA-Z ]+/g,"");
        if(scoreToGet < scoreToReset){
            await sleep(100);
            console.log("Not yet restarting - score is " + scoreToGet);
            produceGold();
            buyMaxMiners();
            fireMaxAll();
        }
    }
}