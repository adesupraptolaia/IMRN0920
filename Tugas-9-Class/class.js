console.log("======= Soal 1");
console.log("======= Release 0");

class Animal {
    constructor(name) {
        this._name = name;
        this._legs = 4;
        this._cold_blooded = false;
    }

    // getter
    get name() {
        return this._name;
    }
    get legs() {
        return this._legs;
    }
    get cold_blooded() {
        return this._cold_blooded;
    }

    // setter
    set name(x) {
        this._name = x;
    }
    set legs(x) {
        this._legs = x;
    }
    set cold_blooded(x) {
        this._cold_blooded = x;
    }
}

var sheep = new Animal("shaun");

console.log(sheep.name); // "shaun"
console.log(sheep.legs); // 4
console.log(sheep.cold_blooded); // false
console.log(sheep);

console.log("======= Release 1");

class Ape extends Animal {
    constructor(name) {
        super(name);
        this._legs = 2;
    }
    yell() {
        console.log("Auooo");
    }
}

var sungokong = new Ape("kera sakti");
console.log(sungokong);
sungokong.yell(); // "Auooo"

class Frog extends Animal {
    constructor(name) {
        super(name);
    }
    jump() {
        console.log("hop hop");
    }
}

var kodok = new Frog("buduk");
console.log(kodok);
kodok.jump(); // "hop hop"

console.log("============ Soal 2");

class Clock {
    constructor({ template }) {
        this.template = template;
        this.timer = 0;
    }

    render = () => {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = "0" + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = "0" + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = "0" + secs;

        let output = this.template
            .replace("h", hours)
            .replace("m", mins)
            .replace("s", secs);

        console.log(output);
    };

    stop = () => {
        clearInterval(this.timer);
    };

    start = () => {
        this.render();
        this.timer = setInterval(this.render, 1000);
    };
}

var clock1 = new Clock({ template: "h:m:s" });
clock1.start();
