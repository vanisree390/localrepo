/*
//Event listeners
const x = document.querySelector(".login-btn"); // Select login button
const y = document.getElementById("log");       // Select login form
const s = document.querySelector(".sidebar");   // Select sidebar
const m = document.querySelectorAll(".content-box"); // Select all content boxes

x.onclick = showlogin;

function showlogin() {
    s.style.display = "none"; // Hide sidebar
    m.forEach(function (item) {
        item.style.display = "none"; // Hide all content boxes
    });
    y.style.display = "block"; // Show login form
}

// Close login and restore main page
document.getElementById("close").addEventListener("click", closelogin);

function closelogin() {
    s.style.display = "block"; // Show sidebar
    m.forEach(function (item) {
        item.style.display = "block"; // Show all content boxes
    });
    y.style.display = "none"; // Hide login form
}

// Change submit button color on hover
document.getElementById("submit").addEventListener("mouseenter", function () {
    this.style.backgroundColor = "green";
});

document.getElementById("submit").addEventListener("mouseout", function () {
    this.style.backgroundColor = "white";
});

// Add border to navbar on click
const a = document.getElementById("addborder");
a.addEventListener("click", border);               //(event,function)

function border() {
    document.querySelector(".navbar").style.border = "5px solid pink";
    a.removeEventListener("click", border);    // Removes event after first click
}
*/

/*
//formevents
//submit reset
const myf=document.getElementById("myform")
const inpt=document.getElementById("ip")
const output=document.getElementById("op") 

myf.addEventListener('submit',function(e) {
    e.preventDefault()                  //page will not refreash
    const ans=inpt.value
    output.textContent=ans
    myf.reset()            //after submitting name to refreash ip fiels
})

myf.addEventListener('input',function(e){             //typing output will fall
    const ans=inpt.value
    output.textContent=ans
})

//focus blur    backgroundcolor=changes                  clicking
//mouseenter mouseleave                                  just by touching
input.addEventListener("focus",function(j){ 
    j.target.style.background="pink"
})
input.addEventListener("blur",function(j){
    j.target.style.background="white"
})
//change
const sel=document.getElementById("myselect")
const divans=document.getElementById("mydiv")
sel.addEventListener("change",function(){
    divans.style.backgroundColor=sel.value
   //divans.textContent=sel.value
})
*/


/*
// Form events: submit & reset
const myf = document.getElementById("myform");
const inpt = document.getElementById("ip");
const output = document.getElementById("op");

if (myf && inpt && output) {
    myf.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent page refresh
        output.textContent = inpt.value; // Display input value
        myf.reset(); // Clear input field
    });

    myf.addEventListener("input", function () {
        output.textContent = inpt.value; // Live update output while typing
    });

    // Focus & Blur events
    inpt.addEventListener("focus", function (j) {
        j.target.style.background = "pink"; // Change background on focus
    });

    inpt.addEventListener("blur", function (j) {
        j.target.style.background = "white"; // Revert background on blur
    });
}

// Change event for dropdown
const sel = document.getElementById("myselect");
const divans = document.getElementById("mydiv");

if (sel && divans) {
    sel.addEventListener("change", function () {
        divans.style.backgroundColor = sel.value; // Change div background based on selection
    });
}
*/

//classslist 
//add
/*
const o=document.getElementById("open")
const c=document.getElementById("close")
const s=document.getElementById("sidebar")
c.addEventListener('click',hide)
//add
function hide(){
    //s.style.display="none"
    s.classList.add("apple")
    document.querySelector(".apple").style.display="none"
}

//remove

function hide(){
    s.classList.remove(" sidebar")
}

o.addEventListener("click",show)
function show(){
    s.style.display="block"
}
*/

//toggle
/*
const c=document.getElementById("close")
const s=document.getElementById("sidebar")
//<button id="close"> closenavbar</button>
c.addEventListener('click',hide)
function hide(){
    s.classList.toggle("mango")
}
*/

