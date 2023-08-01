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
            if (arr1[i][prop] !== arr2[i][prop]) { // if the value of each key in array 1is different from the 
                                                   // value of the corresponding key in element i object of array 2 return false
                return false
            }
        }
    }
    return true // otherwise return true
}
/**7. The Spread Operator vs the Rest Parameter */
/**8. Destructuring Assignment */
/**9. How to Add and Remove Elements from an Array */
/**10. How to Combine Arrays */