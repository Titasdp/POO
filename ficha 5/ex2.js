//definir class car 
class Car {
    //Construncter
    constructor(brand, plate, color, fuelTank, fuelType) {

        this.brand = brand;
        this.plate = plate;
        this.color = color;
        this.fuelTank = Number(fuelTank);
        this.fuelType = fuelType;
    }


    //functions
    //Actualiza cor do carro
    carColor(color) {
        this.color = color;
    }

    //abastecimento do deposito
    AddFuel(fuel) {
        return this.fuelTank += fuel

    }

    //perda de combustivel por kilometros percorridos
    fuelLost(klm) {
        this.fuelTank -= (5 * klm) / 100
    }
}



//criacao de objetos com nomes de carross
let firstCar = new Car("Ford", "91-GH-15", "verde", "40", "Gasóleo");
let secondCar = new Car("Opel", "23-AB-23", "branco", "50", "Gasolina");
let thirdCar = new Car("Nissan", "12-CX-45", "preto", "22", "Gasóleo");

//array de armazenamento de carros 
let cars = []

//addicionar os carros 

cars.push(firstCar)
cars.push(secondCar)
cars.push(thirdCar)



getByBrand("Opel")
getTotalFull("Gasóleo")




//functions addicionais que iteram sobre o array 


//number with that brand
function getByBrand(brand) {

    //variavel contadora que aumenta para saber a quantidade de carros com essa carracteristica
    let cont = 0;
    for (let car of cars) {
        if (car.brand == brand) {
            cont++;
        }

    }
    alert(cont)
}

//numero total de litros de combustivel existentes
function getTotalFull(fueltype) {


    let cont = 0;

    for (let car of cars) {

        if (car.fuelType === fueltype) {

            cont += car.fuelTank;
        }



    }


    alert(cont)

}