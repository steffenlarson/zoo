export default class DoDo {
    constructor(
        name = 'DoDo',
        color = 'Brown',
        gender = 'Male',
        weight = 0,
        tailLengthInch = 0,
        teethSize = 'Beak',
    ) {
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
    }
    eat(food) {
        console.log(`Chomp chomp all the ${food}ies or don't because you are extinct.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}!`)
    }
}

