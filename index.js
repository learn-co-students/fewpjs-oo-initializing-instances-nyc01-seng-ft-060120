// class Dog {
// 	constructor(name, breed) {
// 		this.name = name;
//      this.breed = breed;
// 	}
// } // class Dog

// let bigFluffyDog1 = new Dog("Buzz", "greatPyrenees");
// let bigFluffyDog2 = new Dog("Woody", "labrador");

class Breakfast {
    constructor(food, drink) {
        this.food = food;
        this.drink = drink;
    }
}

class Lunch {
    constructor(salad, soup, drink) {
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}

class Dinner {
    constructor(salad, soup, entree, dessert) {
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this._dessert = dessert;
    }
}



// 1. Create a class for `Breakfast`. `Breakfast` will have a constructor with a food and a drink.

// 2. Create a class for `Lunch`. `Lunch` will have a constructor with a salad, a soup, and a drink.

// 3. Create a class for `Dinner`. Since dinner is a little bit fancier, `Dinner` will have a constructor with salad, soup, entree, and dessert. Indicate that dessert is intended to be a private property by including an underscore (`_`) at the beginning.

