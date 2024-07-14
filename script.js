function displayNumbersInRange(start, end) {
    let result = "";
    for (let i = start; i <= end; i++) {
        result += i + " ";
    }
    return result;
}

function displayOddNumbersInRange(start, end) {
    let result = "";
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            result += i + " ";
        }
    }
    return result;
}

function displayEvenNumbersInRange(start, end) {
    let result = "";
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            result += i + " ";
        }
    }
    return result;
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function displayPrimeNumbersInRange(start, end) {
    let result = "";
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            result += i + " ";
        }
    }
    return result;
}

function getInputValues() {
    let start = parseInt(document.getElementById('start').value);
    let end = parseInt(document.getElementById('end').value);
    return { start, end };
}

function displayNumbers() {
    const { start, end } = getInputValues();
    const result = displayNumbersInRange(start, end);
    document.getElementById('result').textContent = result;
}

function displayOddNumbers() {
    const { start, end } = getInputValues();
    const result = displayOddNumbersInRange(start, end);
    document.getElementById('result').textContent = result;
}

function displayEvenNumbers() {
    const { start, end } = getInputValues();
    const result = displayEvenNumbersInRange(start, end);
    document.getElementById('result').textContent = result;
}

function displayPrimeNumbers() {
    const { start, end } = getInputValues();
    const result = displayPrimeNumbersInRange(start, end);
    document.getElementById('result').textContent = result;
}
