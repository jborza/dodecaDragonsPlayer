let magicToReset = 50000;

const sleep = ms => new Promise(r => setTimeout(r, ms));
breakCycle = false;
window.confirm = function () {
    return true;
};

async function loop() {
    for (let i = 0; i < 10; i++) {
        while (!breakCycle) {
            produceGold();
            var magicToGet;
            magicToGet = Number(document.getElementById("magicToGet").text.replace(",", ""));
            if (magicToGet < magicToReset) {
                buyMaxMiners();
                platinumMaxAll();
                fireMaxAll();
                await sleep(1000);
                console.log("Not yet restarting - magic is " + magicToGet);
                console.log("i = " + i);
            }
            else {
                magicCheck();
            }
        }
    }
}