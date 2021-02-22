function validateName() {
    var x, text;
    x = document.getElementById("name").value;
    if (x == "") {
        text = "Name must be filled";
    }
    else {
        text = "";
    }
    document.getElementById("name-demo").innerHTML = text;
}

