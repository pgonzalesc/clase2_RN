const alumno = {
    firstName: 'Pedro',
    lastName: 'Gonzales',
    age: 24,
    saludo: ()=>{
        return "Hola";
    },
};

alumno.career = 'Web Developer';

for (let key in alumno) {
	console.log(`${key}: ${alumno[key]}`);
}

const lista = {
    item1:
    {
        name: 'Lechuga',
        stock: 1,
        price: 2.1,
        discount: 0,
        total: 2.1,
    },
    item2:
    {
        name: 'Tomate',
        stock: 8,
        price: 3.5,
        discount: 0.12,
        total: 3.38,
    },
    item3:
    {
        name: 'Yogurt',
        stock: 3,
        price: 5.0,
        discount: 0,
        total: 5.0,
    }
};
let price = 0.0;
let igv = 0.18;
for (let key in alumno) {
    price = price + alumno.total;
	console.log(`${key}: ${alumno[key]}`);
}
console.log(`IGV: ${igv}`);
console.log(`Sub Total: ${price}`);
price = price-(price*igv);
console.log(`Total: ${price}`);


