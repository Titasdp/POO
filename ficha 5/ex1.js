class Retangle {

    constructor(hight=2, width=1) {
        this.hight = hight
        this.width = width
        this._color ="white"
    }


    get hight() {
        return this._hight
    }
    set hight(value) {
        this._hight = value
    }

    get width() {
        return this._width
    }
    set width(value) { this._width = value }

    get color() { return this._color }



    getArea (){
        return this._hight*this._width
    }

    getPerimeter(){

        return this._hight*2+ this._width*2


    }
}


let newRectangle= new Retangle(10,5)
let newRectangle2= new Retangle()
console.log(newRectangle.hight);
console.log(newRectangle.width);
console.log(newRectangle2.hight);
console.log(newRectangle2.width);
console.log(newRectangle.getArea())
console.log(newRectangle.getPerimeter())
console.log(newRectangle2.getArea())
console.log(newRectangle2.getPerimeter())