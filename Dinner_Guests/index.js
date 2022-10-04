var guest = ["kHIZRA IQBAL", "MADIHA AHMED", "HAJRA RAFIQ"];


// Add one new guest to the middle of your array.
guest.splice(2, 0, "SIDRA", "AYESHA");


guest.map((name, ind) => {
    return (
        key = ind,
        document.write(name + ", “I would like to invite you for dinner party ”" + "<br>")
    )
}
)


document.write("<br /> Total Number of Guest Arriving is " + guest.length )