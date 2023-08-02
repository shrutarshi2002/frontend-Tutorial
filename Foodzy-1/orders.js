let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCart = document.querySelector('.listCart');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'ITEM 1',
        image: '1.PNG',
        price: 129.00
    },
    {
        id: 2,
        name: 'ITEM 2',
        image: '2.PNG',
        price: 329.00
    },
    {
        id: 3,
        name: 'ITEM 3',
        image: '3.PNG',
        price: 249.00
    },
    {
        id: 4,
        name: 'ITEM 4',
        image: '4.PNG',
        price: 349.00
    },
    {
        id: 5,
        name: 'ITEM 5',
        image: '5.PNG',
        price: 329.00
    },
    {
        id: 6,
        name: 'ITEM 6',
        image: '6.PNG',
        price: 499.00
    }
];
let listCarts  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCart(key){
    if(listCarts[key] == null){
        // copy product form list to list cart
        listCarts[key] = JSON.parse(JSON.stringify(products[key]));
        listCarts[key].quantity = 1;
    }
    reloadCart();
}
function reloadCart(){
    listCart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCarts.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCart.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCarts[key];
    }else{
        listCarts[key].quantity = quantity;
        listCarts[key].price = quantity * products[key].price;
    }
    reloadCart();
}