var guest = ["Ahsan Sabir", 'Shaikh Shab', "Umer Gul"]


document.write("My Guest List" + "<br> <br> ") 
guest.map((name, ind) => {
    return (
        key = ind,
        document.write( name + "<br>")
    )
}
)

document.write("<br>" + "I can only invite 2 peoples" + "<br>" )

guest.pop()

document.write("<br> " +  "Umer Gul, I an sorry you are not invite them to dinner.")

document.write("<br> <br>" + "My New Guest List" + "<br> <br>")

guest.map((name, ind) => {
    return (
        key = ind,
        document.write(name + "<br>")
    )
}
)

guest.splice(0, 2);

document.write("<br>" + "My List is Empty Now" + guest)