console.log('Hello, how are you?');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let one = rand(0, 4);
let two = rand(0, 4);

console.log(one, two);

if (one >= two) {
    console.log(one / two);
} else {
    console.log(two / one);
}