/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. implicit binding: most commonly used when trying to figure out what 'this' keyword is. call a method on our object.
* 2. explicit binding: telling a function what the context of "this" keyword will be.
* 3. new binding: when a function is invoked with a new keyword, the "this keyword" inside the function is bound to the new object.
* 4. window binding: this keyword will default to window obj
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding


var sayAge = function(){
    // 'use strict';
    console.log(this.age);
};

var me = {
    age: 26
};

sayAge();
window.age = 2
sayAge();

// Principle 2

// code example for Implicit Binding

let Person = function(name, state){
    return{
        name: name,
        state: state,
        introduce: function(){
            console.log(this.name + ' ' + this.state)
        },
        friend: {
            name: 'Jenn',
            state: 'Korea',
            introduce: function(){
                console.log(this.name + ' ' + this.state)
            }
        }
    }
}


var Jason = Person('Jason', 'California');
Jason.introduce();
Jason.friend.introduce();

// Principle 3

// code example for New Binding

var Animal = function(color, name, type){
    this.color = color;
    this.name = name;
    this.type = type;
}

var dog = new Animal ('black', 'Cherry', 'Schnauzer');



// Principle 4

// code example for Explicit Binding


var sayName = function(lang1, lang2, lang3){
    console.log('Hello! My name is ' + this.name + ' and I know ' + lang1 + ' ,' + lang2 + ',and '+ lang3)
};

var me = {
    name: "Jason",
    age: 26,
};

var languages = ['JS', 'Ruby', 'Python']
sayName.apply(me, languages);


