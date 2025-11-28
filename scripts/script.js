let dateDisplay = document.getElementById("date-display");
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
    console.log(`${weekDay}, ${dateDay}.${month}.${year}`);
    dateDisplay.innerHTML = `${weekDay}, ${dateDay}.${month}.${year}`
}

window.addEventListener("load", ()=>{setDate()})