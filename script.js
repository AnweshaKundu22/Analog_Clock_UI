//Get refernces to DOM elements
const body = document.querySelector("body");
    hourHand = document.querySelector(".hour");
    minuteHand = document.querySelector(".minute");
    secondHand = document.querySelector(".second");
    modeSwitch = document.querySelector(".mode-switch");

//check if the mode is already set to "Dark Mode" in localStorage
if(localStorage.getItem("mode") == "Dark Mode")
{
    //add "dark" class to body and set modeSwitch text to "Light Mode"
    body.classList.add("dark");
    modeSwitch.textContent = "Switch to Light Mode";
}

 
// add a click event listener to modeSwitch
modeSwitch.addEventListener("click", ()=>{
    // toggle the "dark" class on the body element
    body.classList.toggle("dark");
    //check if the dark class is currently present in the body element
    const isDarkMode = body.classList.contains("dark");
    // set modeSwitch text based on "dark" class presence
    modeSwitch.textContent = isDarkMode? "Switch to Light Mode" : "Switch to Dark Mode";
    // Set local storage "mode" item based on "dark" class presence
    localStorage.setItem("mode", isDarkMode? "Dark Mode" : "Light Mode");
});


const updateTime = () => {
    // get current time and calculate the degrees for clock hands
    let date = new Date()
        secToDeg = (date.getSeconds()/60)*360;
        minToDeg = (date.getMinutes()/60)*360;
        hrToDeg = (date.getHours()/12)*360;
    
    // Rotate the clock hands to the appropriate degree based on the current time
    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minuteHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hrToDeg+(minToDeg/12)}deg)`;

};

//call update time to set clock hands in every seconds
setInterval(updateTime, 1000);

// call update time function to on page load
updateTime();