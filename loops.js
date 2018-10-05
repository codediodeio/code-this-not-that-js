
const orders = [500, 30, 99, 15, 223];


'Bad Loop Code 💩'

const total = 0;
const withTax = [];
const highValue = [];
for (i = 0; i < orders.length; i++) { 

    // Reduce
    total += orders[i];

    // Map
    withTax.push(orders[i] * 1.1);

    // Filter
    if (orders[i] > 100) {
        highValue.push(orders[i])
    }
}


'Good Loop Code ✅'

// Reduce
const total = orders.reduce((acc, cur) => acc + cur)

// Map
const withTax = orders.map(v => v * 1.1)

// Filter
const highValue = orders.filter(v => v > 100);

/**
 * Every
 * @returns false
 */
const everyValueGreaterThan50 = orders.every(v => v > 50)

/**
 * Every
 * @returns true
 */
const everyValueGreaterThan10 = orders.every(v => v > 10)


/**
 * Some
 * @returns false
 */
const someValueGreaterThan500 = orders.some(v => v > 500)

/**
 * Some
 * @returns true
 */
const someValueGreaterThan10 = orders.some(v => v > 10)



