

//  Currency Conversion

// var convertToNaira = Exchange Rate
// EXCHANGE RATE = 550Naira to 1 Dollar
var rate = 620;
document.getElementById("rate").innerHTML = (rate);
function dollarToNaira(){
const currency1 = document.getElementById("currency1").value;
var dollar = (rate * currency1);
document.getElementById("yourTotalAmount").innerHTML = ("You have " + dollar + " Naira");
}
// for converting  Naira To Dollar = (Naira * Excange rate);

/*function dollarToNaira (){
 var toDollar = prompt ("How much Dollar do you want to convert?");
 var dollar = (rate * toDollar);
  
}*/


// for converting Dollar To Naira = (Naira / Excahnge rate);

function nairaToDollar (){
const currency1 = document.getElementById("currency1").value;
 var naira = (currency1 / rate);
 document.getElementById("yourTotalAmount").innerHTML = ("You have " + naira.toFixed(2) + " Dollar");
};
// to reset the currency
function reset(){
  document.getElementById("currency1").inputMode.style.display = "none";
};

// project two
let buttons = Array.from(document.getElementsByClassName('btn'));
let project2 = document.getElementById("project_2");

buttons.map( btn => {
    btn.addEventListener('click', (e) => {
    project2.style.backgroundColor = ((btn).value);
    document.getElementById("color").innerHTML =
    ("you have change the background color to " + (btn).value)

    });
});

function resetBgcolor(){
    project2.style.backgroundColor = "white"
};





// project three
// Days in a month
// choosing a date with more than one switch case

var days = "";
function getbirthmonth(){  
  var month = document.getElementById ("birthMonth").value;
  switch(+month) {
      case 1:
      case 2: days = 28;
        break;
      case 3:
      case 4: days = 30;
        break;
      case 5:
      case 6: days = 30;
        break;
      case 7:
      case 8:
      case 9:  days = 30;
        break;
      case 10:
      case 11: days = 30;
        break;
      case 12: days = 31;
        break;
    };
    document.getElementById ("yourBirthMonthIs").innerHTML = ("There are " + days + " days in this month.");
  };




    
// Educationa and Salary earned
var salary = "";
var education = document.getElementById("eduQualification").value;
 function showSalary(){ 
    switch (education) {
        case "noHighSchool":
            salary = 25636;
            break;
        case "highSchool":
            salary = 35256;
            break;
        case "Associate":
            salary = 41496;
            break;
        case "Bachelor":
            salary = 59124;
            break;
        case "Master":
            salary = 69732;
            break;
        case "Professional":
            salary = 89960;
            break;
        case "Doctoral":
            salary = 52325520;
            break;
    };

document.getElementById("salary").innerHTML = ("In 2015, a person with "+education+" earned an average of #"+salary.toLocaleString("en-US")+"/year.");
};


// project four


var operators  = Array.from(document.getElementsByClassName("operator"));
    operators.map( operator => { operator.addEventListener('click', (e) =>{
    operate =  (e.target.value)
    //  return (operator.value)     
        });
    });

function calculate(){
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);

    if (operate === '+')
    {   
        document.getElementById('answer').value = n1+n2;
    }
    if (operate === '-')
    {   
        document.getElementById('answer').value = n1-n2;
    }
    if (operate === '*')
    {   
        document.getElementById('answer').value = n1*n2;
    }
    if (operate === '/')
    {   
        document.getElementById('answer').value = n1/n2;
    }

};


                    
       
                  




// project Five
// winner and prize
let prize = "";
function  getSelectedValue()
{
  var winner = document.getElementById("list").value;

switch (winner) {
  case 1:
    prize += "a trip for two to the Bahamas and ";
  case 2:
    prize += "a four piece furniture set.";
    break;
  case 3:
    prize += "a smartwatch and ";
  default:
    prize += "tickets to the circus.";
}

document.getElementById("myPrize").innerHTML = ("You've won " + prize);
}


// Project Six
var myOdds = 40;

function generateNumber(){
  document.getElementById("RandomNumber").innerHTML =
  Math.floor(Math.random() * myOdds ); 
};