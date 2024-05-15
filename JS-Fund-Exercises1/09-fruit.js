function solve(fruit, weightInGrams, pricePerKg) {

    const weight = weightInGrams / 1000;
    const money = weight * pricePerKg;

    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`)
}

solve('orange', 2500, 1.80);