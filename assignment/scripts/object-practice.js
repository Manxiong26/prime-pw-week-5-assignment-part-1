console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  firstName: 'Maneena',// setting properties using collins
  lastName: 'Xiong',
  hasSiblings: true,
  shoeCount: 5,
  favThreeFoods: ['Beef Brisket', 'Pho', 'Springs Rolls']
  // TODO - add properties here
}
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName
  - Use the firstName & lastName properties of the object you
    created above to set its value.
  - Console.log fullName
*/
let fullName = me.firstName + ' ' + me.lastName;// creating a variable using .operator to create my fullName.

console.log(fullName);


/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food
*/
console.log(me.favThreeFoods[0]);
console.log(me.favThreeFoods[2]);


/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count.
*/
console.log(me.shoeCount);
console.log('new shoe count should be 6', me.shoeCount += 1);// i changed the code from creating a new variable into just adding a += 1 at the end of me.shoeCount to add a new pair of shoe to my me.shoeCount.
console.log(me.shoeCount);// testing to see if the me.shoeCount updated to 6 instead of 5
/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
me.favoriteColor = 'blue';
console.log(me.favoriteColor);
