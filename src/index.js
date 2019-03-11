// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    // let CoinsArray = {"H":0,"Q":0,"D":0,"N":0,"P":0};
    let CoinsAmount = {50: "H", 25: "Q", 10: "D", 5: "N", 1: "P"};
    let test = {};
    if (currency <= 0) {
        return {};
    } else if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else {
        let zxc = currency;
        // fucking autosort for Object.keys an hour of my time
        Object.keys(CoinsAmount).sort(function ( a, b ) { return b - a; }).forEach(function (entry) {
            // console.log(entry)
            if (Math.floor(zxc/entry) > 0) test[CoinsAmount[entry]] = Math.floor(zxc/entry);
            zxc = zxc % entry;
        })
    }
        // more simple, but more understandable
        // while (true) {
        //     if (Math.floor(currency/50) > 0) test["H"] = Math.floor(currency/50);
        //     let zxc = currency % 50;
        //     if (zxc === 0) break;
        //     if (Math.floor(zxc/25) > 0) test["Q"] = Math.floor(zxc/25);
        //     zxc = zxc % 25;
        //     if (zxc === 0) break;
        //     if (Math.floor(zxc/10) > 0) test["D"] = Math.floor(zxc/10);
        //     zxc = zxc % 10;
        //     if (zxc === 0) break;
        //     if (Math.floor(zxc/5) > 0) test["N"] = Math.floor(zxc/5);
        //     zxc = zxc % 5;
        //     if (zxc === 0) break;
        //     if (Math.floor(zxc/1) > 0) test["P"] = Math.floor(zxc/1);
        //     zxc = zxc % 1;
        //     if (zxc === 0) break;
        // }
        // Object.keys(CoinsAmount).forEach()
        return test;
}
