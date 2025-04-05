//increment
//decrement
//add
//subtract
//currentValue

const Counter =  function() {
    let count = 0;

    this.increment = function () {
        count++;
        console.log(`Incremented: ${count}`);
    }

    this.decrement = function () {
        count--;
        console.log(`Decremented: ${count}`);
    }

    this.add = function(value) {
        count += value;
        console.log(`Added ${value}: ${count}`);
    }

    this.subtract = function(value) {
        count -= value;
        console.log(`Subtracted ${value}: ${count}`);
    }

    this.getCurrentValue = function() {
        console.log(`Current Value: ${count}`);
        return count;
    }
}

const counter = new Counter();
counter.increment(); // Incremented: 1
counter.increment(); // Incremented: 2
counter.decrement(); // Decremented: 1
counter.add(5); // Added 5: 6
counter.subtract(2); // Subtracted 2: 4
counter.getCurrentValue(); // Current Value: 4