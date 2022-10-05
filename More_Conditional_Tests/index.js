let FullName = "Adeyemi Oladipupo";
let age = 21;
let marks = [2, 4, 5, 3]


if (FullName === "Adeyemi Oladipupo") {
    document.write("String is Matched.");
    document.write("<br />")
} else {
    document.write("<br />")
    document.write("String is UnMatched")
}



if (FullName == FullName.toLowerCase()) {
    document.write('lower case true');
} else {
    document.write("lower case false")
    document.write("<br />")
}

if (age == 21) {
    document.write("Age is Matched 21 equality Checked.");
    
}else  {
    document.write("Age is UnMatched inequality Checked.")
    document.write("<br />")
}


if (age > 21) {
    document.write("Age is greater than 21 Checked.");
    document.write("<br />")
} else {
    document.write("<br />")
    document.write("Age is not greater than 21 Checked.")
    
}


if (age < 21) {
    document.write("Age is less than 21 Checked.");
    document.write("<br />")
} else {
    document.write("<br />")
    document.write("Age is not less than 21 Checked.")
    document.write("<br />")
}

if (age >= 21) {
    document.write("Age is greater than equal to 21 Checked.");
    document.write("<br />")
} else {
    document.write("<br />")
    document.write("Age is not greater than equal to 21 Checked.")
}


if (age <= 21) {
    document.write("Age is less than  equal to 21 Checked.");
    document.write("<br />")
} else {
    document.write("<br />")
    document.write("Age is not less than equal to 21 Checked.")
}

if (age <= 21  || age >= 21) {
    document.write("OR opertor condition True.");
    document.write("<br />")
} else {
    document.write("<br />")
    document.write("OR opertor condition false.")
}


if (age < 21 && age >= 21) {
    document.write("And opertor condition True.");
    document.write("<br />")
} else {
    document.write("And opertor condition false.")
}


document.write( "<br>" +  "Array in an item " + marks.includes(3));

document.write( "<br>" +  "Item is not in a array " + marks.includes(13));


