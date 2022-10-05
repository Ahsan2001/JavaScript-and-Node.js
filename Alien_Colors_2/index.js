var alien_color = ["green", "yellow", "red"];


document.write("Else If condition True")
document.write("<br >")

if (alien_color[1] == 'green') {
    document.write("You just earned 5 points!")
} else if (alien_color[1] !== 'green' ) {
    document.write("You just earned 10 points!")
} else{
    document.write("test failed")
} 

document.write("<br ><br > <br >")
document.write("If condition True")
document.write("<br >")
if (alien_color[0] == 'green') {
    document.write("You just earned 5 points!")
} else if (alien_color[1] !== 'green') {
    document.write("You just earned 10 points!")
} else {
    document.write("test failed")
}

