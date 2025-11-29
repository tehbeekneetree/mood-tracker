let dateDisplay = document.getElementById("date-display");
let saveButton = document.getElementById("save-btn");
let clearButton = document.getElementById("clear-btn");

let happinessValue = null;
let angerValue = null;

let date = new Date();

function intToDate(num) {
    switch(num) {
        case 1:
            return "Monday";
            break;
        case 2:
            return "Tuesday";
            break;
        case 3:
            return "Wednesday";
            break;
        case 4:
            return "Thursday";
            break;
        case 5:
            return "Friday";
            break;
        case 6:
            return "Saturday";
            break;
        case 7:
            return "Sunday";
            break;
    }
}

function setDate() {
    let weekDay = intToDate(date.getDay());
    let dateDay = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    dateDisplay.innerHTML = `${weekDay}, ${dateDay}.${month}.${year}`
}

function saveMood() {
    happinessValue = document.querySelector('input[name="h-value"]:checked').value;
    angerValue = document.querySelector('input[name="a-value"]:checked').value;
    let moods = [happinessValue, angerValue];
    localStorage.setItem(`${date.getDate}.${date.getMonth}.${date.getFullYear}`, moods);
    console.log(localStorage.getItem(`${date.getDate}.${date.getMonth}.${date.getFullYear}`))
}

function loadMood() {
    
    if (localStorage.getItem(`${date.getDate}.${date.getMonth}.${date.getFullYear}`)!=null) {
        let moods = localStorage.getItem(`${date.getDate}.${date.getMonth}.${date.getFullYear}`)
        console.log(moods[0]);
        console.log(moods[2]);
        document.querySelector(`input[id="h-${moods[0]}"]`).checked = true; 
        document.querySelector(`input[id="a-${moods[2]}"]`).checked = true;
    }
}

function clearInput() {
    for(let i=1; i<=5; i++) {
        document.querySelector(`input[id="h-${i}"]`).checked = false;
        document.querySelector(`input[id="a-${i}"]`).checked = false
    }
}

window.addEventListener("load", ()=>{loadMood(); setDate()});
saveButton.addEventListener("click", ()=>{saveMood()})
clearButton.addEventListener("click", ()=>{clearInput()})