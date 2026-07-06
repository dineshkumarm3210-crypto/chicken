let chickens = 500;
let eggs = 420;
let feed = 350;
let income = 12500;

function updateDashboard() {
    document.getElementById("chickenCount").innerText = chickens;
    document.getElementById("eggCount").innerText = eggs;
    document.getElementById("feedStock").innerText = feed + " Kg";
    document.getElementById("income").innerText = "₹" + income.toLocaleString();
}

function addChicken() {
    chickens++;
    eggs += 1;
    income += 250;
    updateDashboard();
}

function removeChicken() {
    if (chickens > 0) {
        chickens--;
        eggs = Math.max(0, eggs - 1);
        updateDashboard();
    }
}

window.onload = updateDashboard;
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
    } else {
        alert("Wrong Username or Password");
    }
}