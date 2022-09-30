var bikes = [
    " “I would like to own a YZF-R1” ", 
    " “I would like to own a R6” ", 
    " “I would like to own a Ninja 1000sx” "
];


bikes.map( (wish, ind) => {
    return ( 
        key = ind,
        document.write( wish + "<br>" )
    )
})