document.getElementById("for-js").addEventListener("click", function() {
    document.getElementById('first-part').style.display = "none";
    document.getElementById('rolling-dice').style.display = 'block';
    document.getElementById('stop').style.display = 'block';
})
document.getElementById('stop').addEventListener("click", function() {
    document.getElementById('rolling-dice').style.display = "none";
    document.getElementById("congrats").style.display = "block";
    const choices = ["1", "2", "3", "4", "5", "6"];
    const response = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById("response").innerHTML = response;
    document.getElementById('stop').style.display = "none";
})