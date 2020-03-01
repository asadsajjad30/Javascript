var a = +prompt("Enter English Marks");
var b = +prompt("Enter Maths Marks");
var c = +prompt("Enter Science Marks");
var d = +prompt("Enter Islamiat Marks");
var e = +prompt("Enter Urdu Marks");
var marksobtained = a+b+c+d+e;
var total = (500);
var perc = (marksobtained * 100 / total);
var grade =("");

if(perc >= 80){
    grade = "A+";
}
else if(perc >= 70){
    grade = "A";
}
else if(perc >= 60){
    grade = "B"
}
else if (perc >= 50){
    grade = "C"
}
else if (perc >= 40){
    grade = "D"
}
else{
    grade = "FAIL"
}

console.log('<-----Mark Sheet----->');
console.log('English: ' + a);
console.log('Maths: ' + b);
console.log('Science: ' + c);
console.log('Islamiat: ' + d);
console.log('Urdu: ' + e);
console.log('Obtained Marks: ' + marksobtained);
console.log('Total Marks: ' + total);
console.log('Percentage: ' + perc + '%');
console.log('Grade: ' + grade);