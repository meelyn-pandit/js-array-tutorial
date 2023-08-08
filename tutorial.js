//Array Tutorial

/**Arrays are data structures that are extremely useful and versatile
 * --present in many programming languages
 * --allow you to store multiple values in a single variable
 */

/**  1. How to create an array in javascript */
// Create an array of strings called nobleGases

let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn']

console.log(nobleGases)

// can also use Array() constructor passing the elements to put inside the array as arguments
let nobleGases2 = Array('He', 'Ne', 'Ar', 'Kr', 'Xn')
console.log(nobleGases2)

/**2. Array Indexing */
// each element inside an array is identified by its numeric index or position - starting from zero (not 1) in javascript, as in many programming languages
// access elements through bracket notation
nobleGases[0] // He
nobleGases[1] // Ne
nobleGases[2] // Ar
nobleGases[3] // Kr
nobleGases[4] // Xn

// Can save values into array because they are not fixed size, can expand or shrink
nobleGases[5] = 'Rn'
console.log('noble gases 5th element', nobleGases[5])

/**3. How to use the length Property */
// get length of array
nobleGases.length // 6

/**4. Multidimensional Arrays */
// js arrays can hold any allowed values, arrays included.
// -- an array inside another array is called a nested array
// -- situation creates the possibility of many array objects nested at different depths
let elements = [[['H', 'Li', 'Na'], ['Be', 'Mg']], [['B', 'Al'], ['C', 'Si']]]

// access different elements by repeating the bracket syntax with the indexes corresponding to the elements you are interested in
console.log('multidimensional array index 1', elements[0]) //[['H', 'Li', 'Na'], ['Be', 'Mg']]
console.log('multidimensional array index 2', elements[0][0]) // ['H', 'Li', 'Na']
console.log('multidimensional array index 3', elements[0][0][0]) // 'H'

/**5. Sparse Arrays */
// Sparse arrays are arrays containing empty slots
// -- create an empty slot by typing in two commons separating elements
let firstGroup = ['H', 'Li', 'Na',, 'K', 'Rb', 'Cs']
console.log('Sparse array', firstGroup)

// can create sparse arrays by directly changing the length property or by assignment to an index greater than the length
firstGroup.length = 11
console.log('sparse array by length', firstGroup)


/**6. How to Compare Arrays in Javascript */
// js arrays are objects and if you try to compare two objects the comparison takes place considereing their references, not actual values
// -- compare two arrays containing the same elements
let dough1 = ['flour', 'water', 'yeast', 'salt']
let dough2 = ['flour', 'water', 'yeast', 'salt']

console.log(dough1 === dough2) // false

// even though arrays contain same values, their references are not the same, every time new array object is created,
// it will have a different reference in menory.

// to actually make the above line output true, you need to do this:
dough2 = dough1
console.log(dough1 === dough2) // true

// we are not making a copy of dough1, it means that dough2 will point exactly to the same reference as dough1
// i.e. they are the same array object

// to actually compare two arrays, we will need to iterate throug hthe array and compare each element by one by one.
// can do this with a for loop and some conditional statements:

const compareArr = (arr1, arr2) => { // anonymous function with arr1 and arr2 as inputs
    if (arr1.length !== arr2.length) { // if array 1 length is not equal to array 2 length, return false
        return false
    }
    for (let i = 0; i < arr1.length; i++) { // if i is less than array length 1, i increases by 1
        if (arr1[i] !== arr2[i]) { // if element i in array 1 does not equal element i in array 2, return false
            return false
        }
    }
    return true // if none of those conditiosn are met, then return true
}

console.log('dough1 and dough2 are..', compareArr(dough1, dough2))

// this solution will only work with primitive values (strings, numbers, integers, etc.)
// if array contains objects, need to find a different solution for specific problem

// array comparison if arrays are nested
let metal1 = [['Li', 'Na', 'K'], ['Be', 'Mg', 'Ca']]
let metal2 = [['Li', 'Na', 'K'], ['Be', 'Mg', 'Ca']]

const compareNested = (arr1, arr2) => { // anonymous function with arr1 and arr2 as inputs/options
    if (arr1.length !== arr2.length) { // if length of array 1 does not equal length of array 2 return false
        return false
    }

    for (let i = 0; i < arr1.length; i++) { // if i is less than array 1 length, increase i by 1
        for (let j = 0; j < arr1[i].length; j++) { // if the inner element j is less than array 1 length, increase j by 1
            if (arr1[i][j] !== arr2[i][j]) { // if the i element and inner j element in array 1 does not equal
                                             // the i element and inner j element in array 2 then return false
                return false
            }
        }
    }
    return true // otherwise return true
}

console.log('do nested arrays metals1 and metals 2 equal each other? ', compareNested(metal1, metal2))

// compare two arrays of objects

let albums1 = [
    {
        artist: 'frank zappa',
        title: 'over-nite sensation',
        year: 1973,
    },
    {
        artist: 'frank zappa',
        title: 'apostrophe',
        year: 1974,
    },
    {
        artist: 'frank zappa',
        title: 'one size fits all',
        year: 1975,
    },
]

let albums2 = [
    {
        artist: 'frank zappa',
        title: 'over-nite sensation',
        year: 1973,
    },
    {
        artist: 'frank zappa',
        title: 'apostrophe',
        year: 1974,
    },
    {
        artist: 'frank zappa',
        title: 'one size fits all',
        year: undefined,
    },
]

const compareArrObj = (arr1, arr2) => { // anonymous function that has array 1 and array 2 as options
    if (arr1.length !== arr2.length) { // if the lengths between the two arrays differ then return false
        return false
    }
    for (let i = 0; i < arr1.length; i++) { // if i is less than array 1 length, increase i by 1
        if (Object.keys(arr1[i]).length !== Object.keys(arr2[i]).length) { // if object keys length of array 1 element i do not equal
                                                                           // object keys length of array 2 element i, return false 
            return false
        }
        for (let prop in arr1[i]) { // for every object entry...
            if (arr1[i][prop] !== arr2[i][prop]) { // if the value of each key in array 1 is different from the 
                                                   // value of the corresponding key in element i object of array 2 return false
                return false
            }
        }
    }
    return true // otherwise return true
}

console.log('do the two albulm arrays contain the same objects?', compareArrObj(albums1, albums2))

/**7. The Spread Operator vs the Rest Parameter */
// the spread opperator and rest parameter have similar syntax (...) but they perform fundamentally different operations.

// spread operator enables you to expand an array (an iterable object) into its elements
// -- they can also add modified variables to objects within an array!

// rest parameter allows you to collect an undefined number of arguments into a single array

// How to use the spread Operator
let alkali = ['Li', 'Na', 'K']
let alkEarth = ['Be', 'Mg', 'Ca']

let metals = [...alkali, ...alkEarth] // merging the two arrays together with spread operator
console.log(metals)

// Can use spread operator to create a copy of an array
let metalsCopy = [...metals]
console.log('copy of metals array', metalsCopy)

// How to Use the Rest Parameter
//The rest parameter allows you to collect an undefined number of elements into a single array.
//-- a function can only have one rest parameter
//--the rest parameter needs to be the last in a sequence of function parameters

function f1(first, second, third, ...others) {
    console.log('first element', first)
    console.log('second element', second)
    console.log('third element', third)
    console.log('all other elements', others)
}

f1('He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn') // basically takes the last 3 elements and puts them in their own array

// the rest parameter provies a way to easily access the arguments passed to a functin in array form, instead of using the arguments object:
function f2(...args) {
    console.log('second rest example', args)
}

f2('He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn') // creates an array from all of these elements

/**8. Destructuring Assignment */
// destructuring syntax provides a simple way to assign values by unpacking them from an array object
// let nobleGases3 = ['He', 'Ne', 'Ar', 'Kr', 'Xn']
let [firstRow, secondRow,,FourthRow] = nobleGases
console.log('first row', firstRow)
console.log('second row', secondRow)
console.log('fourth row', FourthRow)

/////////////////////////////////////////////////////////
// Common Array Methods in JS //
//////////////////////////////////////
// in js arrays are objects and possess properties and methods

/**9. How to Add and Remove Elements from an Array */
// push() method - appends the end of array
nobleGases.push('Rn')
console.log('updated noble gasses array', nobleGases) // double instances of Rn

// you can append multiple elements with push() indicating their values separated by a comma
let halogens = ['F', 'Cl']
console.log('halogens array', halogens)

halogens.push('Br', 'I', 'At')
console.log('updated halogens array', halogens)

// similar to push(), the unshift() method adds one or more leements to the beginning of an array
// and returns the length of the modified array

let halogens2 = ['F', 'Cl']
console.log('halogens2 array', halogens2)

halogens2.unshift('Br', 'I', 'At')
console.log('updated halogens2 array', halogens2) // adds new elements to the beginning of array

// pop() method - remove last element of array
nobleGases.pop() // removes the second Rn in array
console.log('nobleGases after popped', nobleGases)

// shift() method - removes the first element from an array and returns it
nobleGases.shift()
console.log('nobleGases after shifted', nobleGases) // removes the first element, in this case He

// splice() method - remove one or more elements from a specific position of an array
nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn'];
console.log('pre-spliced noblelGases', nobleGases)
nobleGases.splice(1,3) // first parameter of splice is the starting index, second is the number of items
                       // to remove from the array, removes Ne, Ar, Kr
console.log('spliced nobleGases', nobleGases) // removes the Ne, Ar, and Kr elements because Ne is the element in the 
                                              // 1 spot (2nd element in array), and removes 3 elements total (Ne, Ar, Kr)

// can also use .splice() to add elements into the array, without removing any elements
nobleGases = ['He', 'Ne', 'Rn']
console.log('pre-splice added nobleGases', nobleGases)

nobleGases.splice(2, 0, 'Ar', 'Kr', 'Xn') // adds Ar, Kr, and Xn elements before index 2 (Rn)
console.log('post-slice added nobleGases', nobleGases)

/**10. How to Combine Arrays */
// concat() method - combine two or more arrays, does not change the original arrays and returns a new array
alkali = ['Li', 'Na', 'K']
console.log('pre concat alkali array', alkali)

let moreAlkali = ['Rb', 'Cs', 'Fr']
alkEarth = ['Be', 'Mg', 'Ca']

alkali.concat(moreAlkali)
console.log('post concat alkali array', alkali.concat(moreAlkali))

alkali.concat(moreAlkali, alkEarth)
console.log('post concat moreAlkali and alkEarth', alkali.concat(moreAlkali, alkEarth))
// alkali array stays the same if console logged again
console.log('alkali should be unedited', alkali)

// push() method changes the original array with ... spread operator
alkali.push(...moreAlkali)
console.log('post push alkali', alkali) // alkali array is modified

// you cannot use the push() method without the spread syntax in its arguments
// -- otherwise the moreAlkali array would be nested within the alkali array
alkali = ['Li', 'Na', 'K']
alkali.push(moreAlkali)
console.log('alkali array post push without spread operator', alkali) // [ 'Li', 'Na', 'K', [ 'Rb', 'Cs', 'Fr' ] ]

// spread operator can also merge two arrays without mutating the original array
alkali = ['Li', 'Na', 'K']
metals = [...alkali, ...alkEarth]
console.log('metals array after joined with spread operator', metals)
console.log('alkali array after spread operator', alkali)

/**11. How to Convert an Array into a String */
// toString() and join() methods - do not mutate the original array
//-- join() method takes an argument, the separator

let animals = ['pig', 'dog', 'sheep']
console.log('animals to string', animals.toString())
console.log('animals join with comma', animals.join(','))
console.log('animals join with space', animals.join(' '))
console.log('animals.join with star', animals.join(' * '))

// there are some limitations:
let arr = [1, 'two', null, undefined, true, {}]
console.log('array to string', arr.toString())
console.log('array join', arr.join())

// the null and undefined are not console.logged and the string representation of the object is [object Object]
// to convert an array containing objects into a string, need to employ another method

// JSON.stringify() method converts array with objects into a string
let albums = [
    {
        artist: 'frank zappa',
        title: 'over-nite sensation',
        year: 1973,
    },
    {
        artist: 'frank zappa',
        title: 'apostrophe',
        year: 1974,
    },
    {
        artist: 'frank zappa',
        title: 'one size fits all',
        year: 1975,
    },
]

console.log('albums json stringify', JSON.stringify(albums)) // square brackets are retained in string

/**12. How to Compare Arrays */
let a = [1, null, 3]
let b = [1, undefined, 3]

console.log('array comparison indexing', a[1] === b[1]) // returns false because null does not equal undefined

console.log('array comparison json stringify', JSON.stringify(a) === JSON.stringify(b)) // returns true

// when undefined is stringified it is null

// to avoid this issue it would be better to use an interave technique to compare elements between
// two different arrays

// every() method is an iterative method that verifies if all the elements in the array pass a condition
// implemented by a callback function and it returns true or false
const compareEvery = (arr1, arr2) => {
    return arr1.length === arr2.length && // AND operator ensures that true is returned only when both conditiosn are true
    arr1.every((elem, index) => elem === arr2[index])
}

console.log('compare arrays a and b with compareEvery callback function', compareEvery(a,b))
// returns false because a[1] and b[1] are not equal

/**13. How to Copy an Array */


/**14. How to Search Inside an Array */
/**15. How to Check if Array Elements Meet a Condition */
/**16. How to Sort an Array */
/**17. How to Perform an Operation on Every Array Element */
/**18. Conclusion */