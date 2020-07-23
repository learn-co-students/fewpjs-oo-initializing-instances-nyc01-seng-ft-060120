// Write your code here

class Breakfast {
    constructor(food, drink) {
        this.food = food;
        this.drink = drink;
    }
}

let breakfastMeal = new Breakfast("Oatmeal", "milk")
breakfastMeal;

class Lunch {
    constructor(salad, soup, drink) {
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}

let lunchMeal = new Lunch("ceasar", "chicken soup", "Pepsi")
lunchMeal;

class Dinner {
    constructor(salad, soup, entree, dessert) {
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this._dessert = dessert;
    }
}
let dinnerMeal = new Dinner("garden", "tomato soup", "steak", "cookie")
dinnerMeal;