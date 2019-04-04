class Car {
    constructor(plate,brand,color,gazTank,resourseType) {


        this.plate = plate
        this.brand= brand
        this.color = color
        this.gazTank= gazTank
        this.resouseType= resourseType

    }

     //Criar metodos 
     setcolor(color){
        return this.color=color;
    }


    setgazTank(liters){
        this.gazTank+=liters
    }


    setgazTank(kms){
        const liters= kms*5/100
        this.gazTank= liters  


    }
}



let firstCar =  new Car("Ford","91-GH-15","verde","40","Gasóleo");
let firstCar =  new Car("Opel","23-AB-23","branco","50","Gasolina");
let firstCar =  new Car("Nissan","12-CX-45","preto","22","Gasóleo");