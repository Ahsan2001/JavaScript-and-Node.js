var namesList = ['laiba', 'hajra', 'admin', 'muneeba', 'ahsan'];
namesList = [''];

for (let names in namesList){
    if (namesList[names] === '') {
        document.write( "<br>" + "We need to find some users!")
    } else {
        document.write(  "<br>" + "list is empty")
    }
}
