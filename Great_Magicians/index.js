let great_magicians = ["ali", 'zain', 'ahsan'];

function show_magicians(name) {

    for (const names in great_magicians) {
        document.write("<br>" + great_magicians[names]  + " the Great  magicians" )
    }
}

show_magicians(great_magicians)

