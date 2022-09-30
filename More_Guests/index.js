var guest = ["kHIZRA IQBAL", "MADIHA AHMED", "HAJRA RAFIQ" ];


// Add one new guest to the beginning of your array
guest.unshift("TALHA");


// Add one new guest to the middle of your array.
guest.splice(2, 0, "SIDRA", "AYESHA");


// Add one new guest to the end of your list
guest.push("HAFSA");


guest.map( (name, ind) => {
    return (
        key = ind,
        document.write(name + ", “I would like to invite you for dinner party ”" + "<br>")
       )
    }
)

