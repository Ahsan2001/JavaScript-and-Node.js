var namesList = ['laiba', 'hajra', 'admin', 'muneeba', 'ahsan'];

let msg = "";
let adminExist = false;

for (let names in namesList){
    if(!adminExist){
        if (namesList[names] === 'admin') {
            adminExist = true;
            msg = "Hello Admin, would you like to see a status report?";
        } else {
            msg = "Hello " + namesList[names] + ", thank you for logging in again.";
        }
    }
}


document.write(msg)