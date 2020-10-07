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
let subtotal = 0.0;

for (let key in alumno) {
    subtotal = subtotal + alumno.total;
}
let igv = subtotal*0.18;
let total = subtotal + total;


const factura = {
    total: `${total}`,
    subTotal: `${subtotal}`,
    igv: `${total}`
};

console.log(factura);


