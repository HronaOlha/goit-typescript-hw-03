class Key {
    private readonly signature = Math.random();

    getSignature() {
        return this.signature
    }
}

class Person {
    constructor(private key: Key) { }
    getKey() {
        return this.key
    }
}

abstract class House {
    protected door = false;
    protected key: Key;
    protected tennants: Person[]= [];

        constructor(key: Key) {
        this.key = key
    }

    comeIn(person: Person) {
        if(this.door && !this.tennants.includes(person)){this.tennants.push(person)}
    }

    abstract openDoor(key: Key):void;
}

class MyHouse extends House {
    openDoor(key: Key) {
        if (key.getSignature() === this.key.getSignature()){this.door = true}
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};