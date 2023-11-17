breakCycle = false;

let breakOnCygilSigns = 2;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.confirm = function () {
    return true;
};

async function loop() {
    while (!breakCycle) {
        darkMagicUpgradeBuyMax();
        magicUpgradeBuyMax();
        cyanSigilsToGet = Number(document.getElementById("cyanSigilsToGet").text);
        if (cyanSigilsToGet >= breakOnCygilSigns) {
            sigilCheck(1);
            for (let i = 0; i < 4; i++)
                dragonFeed();
        }
        await sleep(1000);
        i++;
    }
}