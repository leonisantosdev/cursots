"use strict";
class User {
    constructor(name, age, favoriteColor) {
        this.name = name;
        this.age = age;
        this.favoriteColor = favoriteColor;
    }
}
class SuperUser extends User {
    constructor(name, age, favoriteColor) {
        super(name, age, favoriteColor);
    }
}
const john = new User("John", 22, "Red");
const paul = new SuperUser("Paul", 30, "Black");
console.log(john);
console.log(paul);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá, ${user.name} deseja ver os dados do sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Olá, ${user.name}`);
    }
}
userGreeting(john);
userGreeting(paul);
