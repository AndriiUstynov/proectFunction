// // Напишите функцию, которая принимает название товара, его цену и категорию, добавляет этот товар в массив,
// // где каждый товар это объект и возвращает массив всех товаров. Товаров может быть сколько угодно.
// //     [
// //     {
// //         name: 'pen',
// //         price: 2,
// //         category: pens
// //     }
// //     ]
//
// //
// // let goods =[{
// //     name: 'pen',
// //         price: 2,
// //         category: 'pens',
// // }];
// //
// // let name = prompt('name ?','');
// // let price = prompt('price ?','');
// // let category = prompt('category ?','');
// //     function setUpGood(name,price,category){
// //     let newGood = {
// //         name: name ,
// //         price: Number(price),
// //         category: category,
// //     };
// //     goods.push(newGood);
// //     return goods;
// //
// // };
// // let setUpGo = setUpGood(name,price,category);
// // console.log(SetUpGo);
// // console.log(Goods);
//
// let goods = [{
//     name: 'pen',
//     price: 2,
//     category: 'pens',
// }];
//
// function addGood(name, price, category) {
//     let newGood = {
//         name: name,
//         price: Number(price),
//         category: category
//     };
//     goods.push(newGood);
//     return goods;
// }
//
// // Пример использования
// let name1 = prompt('name?', '');
// let price1 = prompt('price?', '');
// let category1 = prompt('category?', '');
//
// let updatedGoods1 = addGood(name1, price1, category1);
// console.log(updatedGoods1);
//
// let name2 = prompt('name?', '');
// let price2 = prompt('price?', '');
// let category2 = prompt('category?', '');
//
// let updatedGoods2 = addGood(name2, price2, category2);
// console.log(updatedGoods2);
//
// let name3 = prompt('name?', '');
// let price3 = prompt('price?', '');
// let category3 = prompt('category?', '');
//
// let updatedGoods3 = addGood(name3, price3, category3);
// console.log(updatedGoods3);



// Напишите функцию, которая принимает название товара, его цену и категорию, добавляет этот товар в массив,
// где каждый товар это объект и возвращает массив всех товаров. Товаров может быть сколько угодно.

let goods = [{
    name: 'pen',
    price: 2,
    category: 'pens',
}
];


function setUpGood(name, price, category) {

    let good = {
        name: name,
        price: price,
        category: category
    };

    goods.push(good);

    return goods;

}
setUpGood('a', 2, 'a');
setUpGood('ddd', 5, 'd');
setUpGood('sss', 1, 'b');
setUpGood('s', 4, 'd');

console.log(goods);

// Напишите функцию, которая фильтрует товары по цене от и до и возращает новый массив только с товарами выбранного
// ценового диапазона или пустой массив.
function filterGoodsPrice(goods, min, max) {

    return  goods.filter(good => good.price >= min && good.price <= max);

};
let filterGoodsPr = filterGoodsPrice(goods, 1, 3);
console.log(filterGoodsPr);

// Напишите функцию, которая фильтрует товары по категории и возращает новый массив только с товарами выбранной
// категории, если она есть или пустой массив.

function filterGoodsCategory(goods,category){
    return goods.filter(good => good.category === category);

};
let filterGoodsCat = filterGoodsCategory(goods,'d');
console.log(filterGoodsCat);

//Напишите функцию, которая возвращает количесто товаров в категории.

function returnQuantityGoodsCategory(goods, category) {
    return goods.filter(item => item.category === category).length;
};
let filterQuaGooCat = returnQuantityGoodsCategory(goods, 'd');
console.log(filterQuaGooCat);

//Напишите функцию, которая удаляет товар по имени.

function dellGoodsName(goods, name) {
    return goods.filter(item => item.name !== name);
};
let goodsNoDell = dellGoodsName(goods, 'a');
console.log(goodsNoDell);

//Напишите функции, которые сортируют товары по цене от меньшего к большему и наобо и возвращают новый массив.

function sortGoodsPriceMin(goods) {
    return goods.slice().sort((a, b) => a.price - b.price);
}

function sortGoodsPriceMax(goods) {
    return goods.slice().sort((a, b) => b.price - a.price);
};
let goodsPriceMin = sortGoodsPriceMin(goods);
let goodsPriceMax = sortGoodsPriceMax(goods);
console.log(goodsPriceMin);
console.log(goodsPriceMax);


// Напишите функцию, котрая принимает вид сортировки (от большего к меньшему или наоборот)
// и фильтра (диапазон цены или категория) и возвращает новый массив товаров определённой выборки,
//     отсортированные как указал пользователь.


function sortMinMaxfilterMinPrMaxPrCate(goods,sort,minPrice,maxPrice,category) {

        let filteredGoods = goods;

        if (sort === 'max') {
            filteredGoods = filteredGoods.slice().sort((a, b) => b.price - a.price);
        } else if (sort === 'min') {
            filteredGoods = filteredGoods.slice().sort((a, b) => a.price - b.price);
        }

        if (minPrice !== '' && maxPrice !== '') {
            filteredGoods = filteredGoods.filter(good => good.price >= minPrice && good.price <= maxPrice);
        }

        if (category !== '' && category !== '') {
            filteredGoods = filteredGoods.filter(good => good.category === category);
        }
        return filteredGoods;
}
let itog = sortMinMaxfilterMinPrMaxPrCate(goods,'max','1','5','d');
console.log(itog);



// Напишите функцию, котрая принимает фильтра (диапазон цены или категория)
// и возвращает сумму цен товаров этой выборки.

function sumFilterGoods( minPrice, maxPrice, category) {
    let filteredGoods  ;
    if (minPrice !== '' && maxPrice !== '') {
        filteredGoods = goods.filter(good => good.price >= minPrice && good.price <= maxPrice);
    } else if (category !== '') {
        filteredGoods = goods.filter(good => good.category === category);
    } else {
        filteredGoods = goods;
    }
    const totalSum = filteredGoods.reduce((sum, good) => sum + good.price, 0);
    return totalSum;
}
console.log(sumFilterGoods('1','5','') );
console.log(sumFilterGoods('','','d'));
console.log(sumFilterGoods(''));



