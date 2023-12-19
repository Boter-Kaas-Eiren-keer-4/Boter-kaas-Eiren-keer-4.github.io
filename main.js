console.clear();

const myFirstNumber = 123;
const mySecondNumber = 123;


if (myFirstNumber === mySecondNumber) {
    console.log('hi there~!')
}



const bankAccountbalance = 123.50;
const costOFItem = 123;
const tax = 0.50;

if (bankAccountbalance >= costOFItem + tax) {
    console.log('you can purchase this item!')
}

else {
    console.log('you cant purchase this item')
}

let x = [1, 2, 3, 4, 5, 6];
console.log(x)

function myCallback(el) {
    el *= el;
    console.log(el)
}

x.forEach(myCallback)
y = x.map((el) => { return el * el });
console.log(x);
console.log(y);

function changeX(array) {
    let index=0;
    while (index < array.length) {
        array[index] += 5;
        index++;
    }

}

console.log(x);
changeX(x);
console.log(x);
console.log('hello?');
