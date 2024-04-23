let value = 10;

function mycallback(callback) {
}

mycallback(() => {
    value = 20;
});


console.log(value);
