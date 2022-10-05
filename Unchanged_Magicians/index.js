let magicians = ["ali", 'zain', 'ahsan'];

function make_great() {
    var newMagicians = [...magicians]
    document.write(newMagicians)
}

make_great()

function show_magicians(great_magicians) {
    for (const names in great_magicians) {
        document.write("<br>" + great_magicians[names]  + " the Great  magicians" )
    }
}

show_magicians(magicians)