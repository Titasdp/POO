class dice {
    constructor() {
        this.nFaces = 6;
    }


    //propriedsade faceValue 

    get faceValue() {
       return this._faceValue
    }

    set faceValue(newValue) {
        this._faceValue = newValue
    }


    getQuantityFaces() {
        return this.nFaces
    }



    roll() {
        let face = Math.floor((Math.random() * 6) + 1);
        this.faceValue = face
    }
}

hundredRolls()


function hundredRolls() {
    const frequencyTable = [0, 0, 0, 0, 0, 0]
    for (let i = 0; i < 100; i++) {

        const newdice = new dice();
        newdice.roll();
        frequencyTable[newdice.faceValue - 1] += 1
    }

    document.querySelector("table").innerHTML += `<tr><td>Frequencia</td>
    <td>${frequencyTable[0]}</td>
    <td>${frequencyTable[1]}</td>
    <td>${frequencyTable[2]}</td>
    <td>${frequencyTable[3]}</td>
    <td>${frequencyTable[4]}</td>
    <td>${frequencyTable[5]}</td><tr>`



}