var arrays = [90,"pomme",50];
console.log(arrays);
arrays[1]="orange"
console.log(arrays);

/function/
function neww() {
    console.log("testing")
    var a = 40;
    var b = 30;
    console.log(a + b);
}
neww();

/parameter and argument/
function input(wait) {
    console.log("lohrem");
    console.log(wait * 13);
}
input(3);

/return/
function type(x,y) {
    var add = (x + y);
    return add; 
}
var added = type(9,4);
console.log(added)

function average(e,g) {
    var ave= type(e,g)/2
    return ave;    
}
var last = average (40,80);
console.log(last);


/writing using arrow/

const watch =() =>{
    var say = ("one")
    console.log(say);
}
watch();


/conditional statements/
let scoreCalculator = (pass, score) =>{
    if (score >= pass) {
        console.log("congra you passed")
    }

    if (score < pass) {
        console.log("sorry, you failed")
    }

}
scoreCalculator(50,76);


const rainPredictor = (normalTemp,Todaysprediction) =>{
    if (Todaysprediction >= normalTemp) {
        console.log("todays weather feels normal")
        
    } else {
        console.log("It maight rain dont forget your umbrela") 
    }
}

rainPredictor(20,15);

let gradecalcolator = (g) =>{
    if (g > 90) {
        console.log("A");
    }
    else if (g > 80){
        console.log("B");
    }
    else if(g > 70){
        console.log("C");
    }
    else if(g > 60){
        console.log("D");
    }
    else {
        console.log("F");
    }

}

gradecalcolator(88);
gradecalcolator(55);
gradecalcolator(77);
gradecalcolator(95);
gradecalcolator(84);



function whatIsToday() {
    
    let day = new Date();

    switch (day.getDay()) {
        case 0:
            dayname = "monday"
            break;
        case 1:
            dayname ="tuesday"
            break;
        case 2:
            dayname = "wednesday"
            break;
        case 3:
            dayname = "thursday"
            break;
        case 4:
            dayname = "friday"
            break;
        case 5:
            dayname = "saturday"
            break;
        case 6:
            dayname = "sunday"
            break;
        default:
            dayname = "invalid"
            
    }
    console.log("today is " + dayname);
}
whatIsToday();

/algorithm writing/

function add(x,y) {
    if (isNaN(x)||isNaN(y)) {
        console.log("please provide a number")
    }
    return parseFloat(x)+parseFloat(y);
}
console.log(add(3.4,"9"));


/premier league table calculator/
function teampoint(name,W,D) {
    if (isNaN(W)||isNaN(D)) {
        console.log("please provide team point")
    } else {
        var win = W * 3;
        var draw = D * 1;
        var totalP = win + draw;

        console.log (name  + " scores " + totalP + " ponits")
    }
    
}

teampoint("Manchester City",6,8);
teampoint("Arsenal",5,7);
teampoint("Manchester United" ,7,8);


/loop/
var studentscores = [60,79,55,84,74,90,91,70,88,76,67,97,100]
for (y = 0; y < studentscores.length; y++) {
        console.log(studentscores[y]);
}

function namingOcean(names) {
    let x= true;
    let i = 0;
    while (x) {
        if (names[i]=== "atlantic") {
            x = false
        } else {
            console.log(names[i]);
        }

        i++;
    }
    
}
namingOcean(["pacific", "antarctic", "indian","atlantic", "arctic"]);

/edabit algorithm question/

function addup(a) {
    if (isNaN(a)|| a < 0) {
        console.log("please provide a positive number");
    } else {
        let result = 0;
        for ( index = 1; index <= a; index++){
            result = result + index;               
        }
        console.log(result);
    } 

}
addup(4);
addup(13);
addup(600);

/object/
let car = {
    brand : "tesla",
    model : "cyberTruck",
    year : "2024",
    price : "$80000",

    v:function() {
        return "get discount to buy " + this.brand;
    }
        
            
    
        

}
console.log(car.price);
console.log(car.v());
car.brand = "porche";
car.interestRate = 3.2;

console.log(car);


/object constructor like blue print/
function sell(carname,carmilage,carcolor,carweight) {
    this.name = carname;
    this.milage = carmilage;
    this.color = carcolor;
    this.carweight = carweight;
    
};
let myToyota = new sell("Toyota", 1000, "black", 450);
console.log(myToyota);
console.log(myToyota.carweight);













