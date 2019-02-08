let obs = Rx.Observable
    .interval(1000)
    .take(3)
    .map(function(value) {
        return Date.now();
    });
    

obs.subscribe(function(value) {
    console.log("Subscriber: " + value)
});