const shop = {
    shopName: 'star tach',
    address: {
        city: 'dhaka',
        country: 'bangladesh'
    },
    products:['computer','laptop','keyboard'],
    startingPrice: 500,
    isOpen: true,
    isNew: false,
}
console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson);
const shopObj = JSON.parse(shopJson);
console.log(shopObj);