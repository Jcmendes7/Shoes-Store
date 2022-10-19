const fs = require('fs');

//function construtora
function Shoes(picture,description,price) {
    this.picture = picture;
    this.description = description;
    this.price = price;
}

function getAll() {
    //filesystem
    const shoesList = JSON.parse(fs.readFileSync("database/shoes.json"))
    return shoesList.map(
        (shoes) => 
        new Shoes(
            shoes.picture,
            shoes.description,
            shoes.price));
}

module.exports = {
    getAll,
}