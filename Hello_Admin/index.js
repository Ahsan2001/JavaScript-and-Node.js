var namesList = ['laiba', 'hajra', 'admin', 'muneeba', 'ahsan'];

for (let names in namesList){
    if (namesList[names] === 'admin') {
        document.write( "<br>" + "Hello Admin, would you like to see a status report?")
    } else {
        document.write(  "<br>" + "Hello " + namesList[names] + ", thank you for logging in again.")
    }
}
