var current_users = ["ahsan", "ali", "talha", "rafiq", "younus"];


var new_users = ["zeeshan", "damil", "ali", "talha", "ahsan"]

current_users.toLowerCase
new_users.toLowerCase


for (let names in new_users){
    for (let check in current_users){
        if (new_users[names] === current_users[check] ) {
            document.write( "<br>" + "person will need to enter a new username")
        } else {
            document.write(  "<br>" + "the username is available")
        }
    }
}