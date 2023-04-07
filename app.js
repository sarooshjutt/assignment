// QN=O1
var num1,num2;
num1=window.propmt("input the First integer","0");
num2=window.prompt("input the second integer","0");
if(parseInt(num1,10)>parseInt(num2,10))
{
    console.log("The larger of "+num1+"and"+num2+"is"+num1+".");
}
//else


//Qno=02
var x=3;
var y=_7
var z=2;
if (x>0 && y>0&& z>0)
{
    alert ("The sign is +");
}
else if ( x<0 && y<0 && z<0)
{
    console.log("The sign is-");
}
else if ( x>0 && y>0 && z>0);
{
    console.log("The sign is +");
}
 if (x<0 && y>0 && z<0)
{
console.log("The sign is +");
}
else
{
    console.log(" The sign is-");
}

//QN=03

function getlargest(a,b,c,d,e)
{
    if(a>b && a>c && a>d && a>e){
        return a;
        console.log(getlargest(1,2,3,4,5));
}
if (b>a && b>c && b>d && b>e ){
    return b;
    console.log(getlargest(2,3,4,5,1));
}
if( c>a && c>b && c>d && a>e){
    return c;
    console.log(getlargest(3,4,5,1,2));
}
if( d>a && d>b && d>c && d>e){
    return  d;
    console.log(getlargest(4,5,1,2,3));
}
if(e>a && e>b && e>c && e>d){
    return e;
    console.log(getlargest(5,1,2,3,4));
}
}

//QN=04
for ( var x=0; x<=15; x++)
if (x===0){
    console.log(x+"is even");
}
else if (x % 2===0){
    console.log(x +" is even");
}
else{
    console.log(x+"is odd");
}

//QN=05
var student=[["sara",80],["ali",77],["zara",88],["iqra",95],["sunaina",68]];
var Avgmark=0;

for (var i=0; i< students.length;i++){
    Avgmark+=students[i][1];
    varavg=(Avgmark/students.length;)
}
console.log("Average grade:"+(Avgmark)/student.length);
if(avg<60){
    console.log("Grade:F");
}
else if (avg<70){
    console.log("Grade:D");
}
else if (avg<80){
    console.log("Grade:C");
}
else if (avg<90){
    console.log("Grade B");
}
else if (avg<100){
    console.log("Grade A");
}
//QN=06
for (i=1;i<=100;i++)
{
    if ( i%3=== 0 && i%5 ===0)
{
    console.log( i +"FizzBuzz")
}
else if ( i%3 ===0)
{
    console.log(i + "Fizz");
}
else if ( i%5 ===0)
{
    console.log(i + "Buzz");
}
else
{
    console.log(i);
}
}

//QN=07
var x,y,chr;
for (x=1;x<=6;x++);
{
    for (y=1;y<x;y++);
{
    chr=chr+("*");
}
console.log(chr);
chr=" ";
}