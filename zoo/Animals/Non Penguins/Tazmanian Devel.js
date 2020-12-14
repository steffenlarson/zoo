class TazmanianDevil {
    constructor(
        name = 'Tazmanian Devil',
        color = 'Brown',
        gender = 'M',
        weight = 0,
        tailLengthInch = 0,
        teethSize = 'TEETH',
    ) {
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
    }
    eat(food) {
        console.log(`Chomp chomp all the ${food}ies.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}!`)
    }
}

export default TazmanianDevil;