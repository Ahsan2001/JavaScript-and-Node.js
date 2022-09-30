var guest = ["kHIZRA IQBAL", "MADIHA AHMED", "HAJRA RAFIQ" ];

guest.map( (name, ind) => {
    return (
        key = ind,
        document.write(" “I would like to invite you for dinner  " + name +  "”" + "<br>" )
    )
 }
)

document.write("<br>")
document.write("kHIZRA IQBAL can not come for dinner 💔  <br>")
document.write("<br>")

guest.shift();
guest.push("MINAL KHAN"); 

guest.map((name, ind) => {
    return (
        key = ind,
        document.write(" “I would like to invite you for dinner  " + name + "”" + "<br>")
    )
}
)