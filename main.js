let db = [
    { "id": "0001", "name": "Coca Cola", "price": 3 },
    { "id": "0002", "name": "Diet Coke", "price": 4 },
    { "id": "0003", "name": "Pepsi-Cola", "price": 5 },
    { "id": "0004", "name": "Mountain Dew", "price": 6 },
    { "id": "0005", "name": "Dr Pepper", "price": 7 },
    { "id": "0006", "name": "Sprite", "price": 8 },
    { "id": "0007", "name": "Diet Pepsi", "price": 9 },
    { "id": "0008", "name": "Diet Mountain Dew", "price": 10 },
    { "id": "0009", "name": "Diet Dr Pepper", "price": 11 },
    { "id": "0010", "name": "Fanta", "price": 12 }
]



function countProdycts(codes) {
    var map = new Map();
    for (let index = 0; index < codes.length; index++) {
        var code = codes[index];
        if (!map.has(code)) {
            map.set(code, {
                code: code,
                count: 1
            })
        } else {
            var item = map.get(code);
            item.count++;
            map.set(code, item);
        }
    }
    var items = [];
    map.forEach(function (item) {
        items.push(item);
    })
    return items;
}


function fetchProduct(code) {
    for (let index = 0; index < db.length; index++) {
        console.log(db[index])
        if (db[index].id === code) {
            return {
                price: db[index].price,
                name: db[index].name
            }
        }
    }
}


function generareReceiptItems(codes) {
    var countedCodes = countProdycts(codes);
    var receiptItems = []
    countedCodes.forEach(function (item) {
        var product = fetchProduct(item, code);
        receiptItems.push({
            name: product.name,
            price: name.price,
            count: item.count
        })
    })
    console.log(countedCodes);
}


function conutTotalPrice() {
    var total = 0;
    receiptItems.forEach(function (item) {
        total = total + item.price * item.count;
    });
    return total;
}


function assemble(assembleInput, toatalPrice) {
    let receipText = "Receipts\n";
    receipText += '------------------------------\n';
    for (let index = 0; index < assembleInput.length; index++) {
        receipText += assembleInput[index].name + ' ';
        receipText += assembleInput[index].price + ' ';
        receipText += assembleInput[index].count + '\n';
    }
    receipText += '------------------------------\n';
    receipText += 'Price=' + toatalPrice;
    return receipText;
}


module.exports = {
    countProdycts,
    fetchProduct
}