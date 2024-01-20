function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function loop() {
    while (true) {   
       await sleep(2 * 1000);
       gainNuclearPasta();
    }
}