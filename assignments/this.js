/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit binding - whatever is left to the "." in function invocation will reference that object
* 2. Explicit binding - "this" is explicitly stated when .call or .apply are invoked
* 3. New binding - when a constructor function is invoked using "new", "this" will be bound to the new object being constructed
* 4. Window binding - "this" in the global scope refers to the JavaScript window
*
* write out a code example of each explanation above
*/

// Principle 1

let sayBattleCry = function() {
    console.log(this.battlecry);
};

sayBattleCry();

// code example for Window Binding

// Principle 2

let me = {
    name: 'Teddy',
    age: 22,
    sayName: function() {
        console.log(this.name);
    }
};

me.sayName();

// code example for Implicit Binding

// Principle 3

let Hero = function(universe, name, role) {
    this.universe = universe;
    this.name = name;
    this.role = role;
};

let malthael = new Hero('Diablo', 'Malthael', 'bruiser')

console.log(malthael);

// code example for New Binding

// Principle 4

let sayAge = function() {
    console.log(`I am ${this.age} years old.`);
};

let chad = {
    name: 'Chad',
    age: 32
};

sayAge.call(chad);

// code example for Explicit Binding