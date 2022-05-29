function cats(catsAsString) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = [];

    for (let catAsString of catsAsString) {
        let tokens = catAsString.split(' ');
        let cat = new Cat(tokens[0], Number(tokens[1]));
        cats.push(cat);
    }

    for (let cat of cats) {
        cat.meow();
    }
}

cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);