function Redirect(){
    //var myDiv = document.getElementsByClassName("container");  
    var button = document.createElement('BUTTON')
    var text = document.createTextNode("Return"); 
    button.appendChild(text); 
    //myDiv.appendChild(button);
    document.write('<br>');
    document.body.appendChild(button);
    button.onclick=function(){
        window.location.assign("http://127.0.0.1:5500/JS/A1/index.html")};
}

function Arithmatic(){
    var N1=18, N2=16;
    document.write('Arithmetic Operators');
    document.write('<br>Input : '+ N1 + ',' + N2);
    for(i=1 ; i<=9; i++){
        var N1=18, N2=16;
        switch(i){
            case 1:
                document.write('<br>', i,') ', N1, '+', N2, '=', N1+N2);    
                break;s
            case 2:
                document.write('<br>', i,') ',  N1, '-', N2, '=', N1-N2);    
                break;
            case 3:
                document.write('<br>', i,') ',  N1, 'X', N2, '=', N1*N2);    
                break;
            case 4:
                document.write('<br>', i,') ',  N1, '/', N2, '=', N1/N2);    
                break;
            case 5:
                document.write('<br>', i,') ',  N1, '%', N2, '=', N1%N2);    
                break;
            case 6:
                document.write('<br>', i,') ',  N1, '++', '=', N1++);    
                break;
            case 7:
                document.write('<br>', i,') ',  '++', N1, '=', ++N1);    
                break;
            case 8:
                document.write('<br>', i,') ',  N2, '--', '=', N2--);    
                break;
            case 9:
                document.write('<br>', i,') ',  '--', N2, '=', --N2);    
                break;

        }
    }        
 
    // document.write('<br>Result Swap No. : '+ x + ',' + y)
    Redirect();
}

function Conditional(){
    var x=20, y=10, z=15;
    document.write('Conditional Operators');
    document.write("<br>condition ? value1 : value2;");
    document.write('<br>Input : ', x, ',', y, ',', z);
    var res =  x > y ? x : y ;
    var res =  res > z ? res : z;
    document.write('<br>The Greatest among these three numbers (', x, ',', y, ',', z, ') :',res);
    Redirect();
}

function A1f3(){
    x = prompt('Enter First No. : ');
    y = prompt('Enter Second No. : ');
    document.write('<br>Swap Two Values without using a third variable');
    Swap(x,y);
    Redirect();
}

function Swap(x,y){
    document.write('<br><br>Input : '+ x + ',' + y);

    
    // Method:1
    // z = x, x = y, y = z;

    [x, y]=[y, x];
    
    /*Method:3
    x = Number(x);
    y = Number(y);
    x = x + y;
    y = x - y;
    x = x - y;*/
 
    document.write('<br>Swap No. : ', x, ',', y)
}

function A2f1(){
    document.write('<br>Swap Two Values without using a third variable');
    for(i = 1 ; i <= 4 ; i++){
        switch (i){
            case 1:
               Swap(10,90); 
               break;
            case 2:
               Swap(20,80); 
               break;
            case 3:
                Swap(30,70); 
                break;
            case 4:
                Swap(40,60); 
                break;
        }
    }
    Redirect();
}

function A2f2(){
    document.write('<br>Determine whether it is even or odd');
    for(i=1 ; i<=2 ; i++){
        switch (i){
            case 1:
               var x = 67;
               break;
            case 2:
                var x = 76; 
               break; 
        }
        document.write('<br>', x, ' is ', Oddeven(x));
    }
    Redirect();
}

function Oddeven(x){
    return (x % 2 == 0) ? 'Even' : 'Odd'
}

function A3f1(){
    input = Number(prompt('Enter a Number to print Factorial : '))
    document.write("'Factorial' of the Number using 'while'");
    document.write("<br> Input Number is : ", input);

    if (input < 0){
        document.write('<br>Factorial does not exist for negative number');
    } else if (input == 1){
        document.write('<br>The factorial of 0 is 1');
    } else{
        var factorial = 1, loop = 1;
        while (loop <= input){
            document.write("<br>", factorial, ' * ', loop);        
            factorial *=  loop;
            loop ++ ;
        }
    }   
    document.write("<br>The Factorial of ", input, ' is ', factorial);
    Redirect();
}

function A3f2(){
    input = Number(prompt('Enter a year to check Leap year : '));
    document.write("<br> Check whether the entered year is leap year or not using 'if else'.");
    document.writeln('<br><br>Input Year is : ', input);
    var leap = false;
    if (input % 4 == 0){
        if (input % 100 == 0){
            if (input % 400 == 0){
                leap=true;
            }else{
                leap=false;
            }
        } else{
            leap = false;
        }
    }  else{
        leap = false;
    }
    document.write('<br>',input, ' is ', leap ? '' : 'not ', 'a leap year');
    Redirect();
}

function A3f3(){
    nterms = Number(prompt('Fibonacci sequence How many terms ?'));
    document.write("<br>Print 'Fibonacci series' up-to the entered limit using 'for'");
    document.write("<br><br>Input Terms : ",nterms);
    var n1 = 0, n2 = 1 , nth = 0;
    if (nterms <= 0){
        document.write("<br>Enter a positive integer!");
    }else if (nterms == 1){
        document.write("<br>Fibonacci Series : ",n1);
    }else{
        document.write(nterms);
        document.write("<br>* ", n1, ' ', n2);
        var fibonacci = [];
        for(count = 0 ; count < nterms ; count++){
            fibonacci[count] = n1;
            document.write("<br>", n1);
            nth = n1 + n2;
            n1 = n2;
            n2 = nth;
            document.write("<br>** ", n1, ' ', n2);
        }
    }    
    document.write("<br>Fibonacci series");
    document.write("<br>",fibonacci);

    Redirect();
}

function A3f4(){
    input = prompt('Enter Nos separted by comma for Arithmatic operation');
    input = input.split(',');
    document.write("<br>Create a simple calculator using 'switch'")
    document.write('<br><br>Input : ',input)
    var addbtn = document.createElement('BUTTON')
    var text = document.createTextNode(" + "); 
    addbtn.appendChild(text); 
    document.write('<br>');
    document.body.appendChild(addbtn);
    addbtn.onclick= function(){
        Calc(1);
    }

    var subbtn = document.createElement('BUTTON')
    var text = document.createTextNode(" - "); 
    subbtn.appendChild(text); 
    document.body.appendChild(subbtn);
    subbtn.onclick= function(){
        Calc(2);
    }

    var sumbtn = document.createElement('BUTTON')
    var text = document.createTextNode(" * "); 
    sumbtn.appendChild(text); 
    document.body.appendChild(sumbtn);
    sumbtn.onclick= function(){
        Calc(3);
    }

    var divbtn = document.createElement('BUTTON')
    var text = document.createTextNode(" / "); 
    divbtn.appendChild(text); 
    document.body.appendChild(divbtn);
    divbtn.onclick= function(){
        Calc(4);
    }

    Redirect();
}

function Calc(option){
    var input1 = [];
    input1=input.slice(0,input.length);
    var number = Number(input1[0]);
    input1.shift();
    // document.write('<br>', input, input1, ',', input1.length);
    for(var count = 0; count < input1.length; count++){
        // document.write('<br>', count, ',', input1[count]);
        switch(option){
            case 1:
                number += Number(input1[count]);
                break;
            case 2:
                number -= Number(input1[count]);
                break;
            case 3:
                number *= Number(input1[count]);
                break;
            case 4:
                number /= Number(input1[count]);
                break;
    
        }    
    }
    document.write('<br>', number);
}

let A3f5 = () => {
    input = prompt('Enter No. eg. 1+1+1-5');
    document.write('Simple Calculator using Arrow function, eval() & Try Catch');
    document.write(`<br>Input No. Series : ${input}`);
    try {
        document.write(`<br>Result : ${eval(input)}`);
    }
    catch(err) {
        document.write('<br>'+err.message);
    }
    Redirect();
}

function A4f1(){
    document.write('<br>Cumulative Grade Points Average (CGPA)')
    document.write('<br> argument passed : 8,9,7,9,7')
    var x = new Student(8,9,7,9,7);
    x.calCgpa();
    Redirect();
}

class Student{
    constructor(sub1, sub2, sub3, sub4, sub5){
        // this.sub1 = sub1;
        // this.sub2 = sub2;
        // this.sub3 = sub3;
        // this.sub4 = sub4;
        // this.sub5 = sub5;
        this.cpga = (sub1 + sub2 + sub3 + sub4 + sub5) / 5;
    }

    calCgpa(){
        document.write('<br>'+`CGPA is : ${this.cpga}`);
        document.write('<br>'+`CGPA % is : ${(this.cpga * 9.5)}`);
    }
}

function A4f2(){
    document.write('<br>Display Patient Details using Class');
    document.write('<hr>');
    var op = new Outpatient();
    op.op();
    document.write('<hr>');
    var ipgw = new Generalward();
    ipgw.ipgw();
    document.write('<hr>');
    var ipsw = new Specialward();
    ipsw.ipsw();
    Redirect();
}

class Patient{
    constructor(){
        this.name = 'Gokul';
        this.age = 55 ;
        this.gender = 'Male';
    }
    patient(){
        document.write("<br> Patient's Name : " + this.name);
        document.write("<br> Age : " + this.age);
        document.write("<br> Gender : " + this.gender);
    }
}

class Outpatient extends Patient{
    constructor(){
        super()
        this.opnumber = '2001';
        this.drid = '873456';
        this.fees = 250;
    }

    op(){
        document.write('<br>Out - Patient Details')
        this.patient();
        document.write('<br>Doctor-id : '+this.drid);
        document.write('<br>Fees : Rs.'+this.fees);
    }
}

class Inpatient extends Patient{
    constructor(){
        super();
        this.ipnumber = '103';
        this.nodays = 5;
    }
}

class Generalward extends Inpatient{
    constructor(){
        super();
        this.rentperday = 300;
        this.fees = 1500;
    }
    ipgw(){
        document.write('<br>In-Patient details : General Ward')
        this.patient();
        document.write('<br>Ip - Number : ' + this.ipnumber);
        document.write('<br>No. of days : ' + this.nodays);
        document.write('<br>Rent per day : Rs.' + this.rentperday);
        document.write('<br>Fees : Rs.' + this.fees);
    }
}

class Specialward extends Inpatient{
    constructor(){
        super();
        this.rentperday = 300;
        this.roomno = '743';
        this.ebbill = 500;
        this.fees = 2000;
    }
    ipsw(){
        document.write('<br>In-Patient details : Special Ward')
        this.patient();
        document.write('<br>Ip - Number : ' + this.ipnumber);
        document.write('<br>Room Number : ' + this.roomno);
        document.write('<br>No. of days : ' + this.nodays);
        document.write('<br>Rent per day : Rs.' + this.rentperday);
        document.write('<br>EB-Bill : Rs.' + this.ebbill);
        document.write('<br>Fees : Rs.' + this.fees);
    }

}