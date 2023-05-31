var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03,
    49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01];

var max = document.getElementById('Max');
var aplus =document.getElementById("A+");
var a = document.getElementById("A");
var aminus = document.getElementById("A-");
var bplus = document.getElementById("B+");
var b = document.getElementById("B");
var bminus = document.getElementById("B-");
var cplus = document.getElementById("C+");
var c = document.getElementById("C");
var cminus = document.getElementById("C-");
var d = document.getElementById("D");
var f = document.getElementById("F");
            
var intervals = [];
intervals.push(f.value,d.value,cminus.value,c.value,cplus.value,bminus.value,
    b.value,bplus.value,aminus.value,a.value,aplus.value,max.value);

var strings = [];
strings.push(aplus.id,a.id,aminus.id,bplus.id,
    b.id,bminus.id,cplus.id,c.id,cminus.id,d.id,f.id);

function compareTo (x, y) {
    return x > y;
}

function printMsg() {
    var message = "Bounds must be valid. Only numbers allowed";
    document.getElementById("error-msg").innerHTML = message;    
}

for (let i = 0; i < intervals.length-1; i++) {
    var a = Number(intervals[i]);
    var b = Number(intervals[i+1]);
    if (compareTo(a,b)) {
        printMsg();
    }
} 

intervals.pop();

function generateHistogram() {
    var count = [];
    for (let i = (strings.length-1); i >= 0; i--) {
        var counter = 0;
        var lowerBound = intervals[i];
        for (let j = 0; j < grades.length; j++) {
            if (i == (strings.length-1)) {
                if (grades[j] >= Number(lowerBound)) {
                    counter++;
                }
            } else {
                var upperBound = intervals[i+1]
                if ((grades[j] >= Number(lowerBound)) && (grades[j] < upperBound)) {
                    counter++;
                }
            }
        }
        count.push(counter);
    }
    

    var listOfHist = document.getElementsByClassName("hist");
    for (let i = 0; i < count.length; i++) {
        var tempVal = count[i];
        var space = "";
        for (let j = 0; j < tempVal; j++) {
            space = space + "X";
        }
        listOfHist[i].innerHTML = space;
    }
}

generateHistogram();
