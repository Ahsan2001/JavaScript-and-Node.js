var myName = "Muhammad ahsan Sabir shaikh";

function titleCase(name) {
    return  (
        name.toLowerCase().split(' ').map(function (word) { 
            return (
                word.charAt(0).toUpperCase() + word.slice(1)
             );
        }).join(' ') 
    )
}


document.write(`
                 <h4>LowerCase</h4>
                 ${myName.toLowerCase()} <br> 

                 <h4>UpperCase</h4>
                 ${myName.toUpperCase()} <br>  

                 <h4>TitleCase</h4>
                 ${titleCase(myName)} <br>
                `
            );






// Example slice 

// The slice() method returns selected elements in an array, as a new array.
// The slice() method selects from a given start, up to a(not inclusive) given end
// The slice() method does not change the original array.

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits, "All List")
console.log(fruits.slice(1), "Slice 1")
console.log(fruits.slice(1,3), "Slice 1,3")
// Note: start from 1 index stop before 3 index 



