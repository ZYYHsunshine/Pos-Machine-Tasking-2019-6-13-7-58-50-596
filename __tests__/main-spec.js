const { countProdycts, fetchProduct } = require('../main');

it('should count codes', () => {
    // given
    const codes = ['003', '003', '001'];
    //when
    const countedCodes = countProdycts(codes);
    console.log(countedCodes)
    //then
    expect(countedCodes[0].count).toBe(2);
});

it('should fecth product', () => {
    // given
    const db = [
        { "id": "0001", "name": "Coca Cola", "price": 3 },
        { "id": "0002", "name": "Diet Coke", "price": 4 },
    ];
    const code = '0001';
    //when
    const product = fetchProduct(code, db);
    console.log(product)
    //then
    expect(product.price).toBe(3);
});

it('结果验证', () => {
    //集成
    var codes = generareReceiptItems(['0003', '0003', '00001']);
    console.log("generareReceiptItems:", codes);
    //输出
    {
        { name: 'Pepsi-cola', price: 5, count: 2 }
        { name: 'Coca cola', price: 3, count: 1 }

    }
});


var countTotalPriceInput = [
    {name:'Pepsi-Cola',price:5,count:2},
    {}
]