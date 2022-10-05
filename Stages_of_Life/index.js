var age = 21;

if (age < 2) {
    document.write("The person is a baby.");
} else if (age >= 2 && age < 4) {
    document.write("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    document.write("The person is a kid.");
} else if (age >= 13 && age < 20) {
    document.write("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    document.write("The person is an adult.");
} else if (age >= 65) {
    document.write("The person is an elder.");
} else {
    document.write("The person is not defined.");
}