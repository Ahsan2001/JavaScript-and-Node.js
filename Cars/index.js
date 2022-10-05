function Cars(modalName,manufacturer) {
    let myObject = {
        "modalName"  : modalName ,
        "manufacturer" :manufacturer,
    }
    document.write(myObject.modalName + "<br>" + myObject.manufacturer)
}


Cars("2022", "Audi")

