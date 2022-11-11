function setInput(id) {
    if ("×".localeCompare(id.innerHTML, "pl") == 0) {
        document.getElementById("input").value += "*";
        document.getElementById("hidden").innerHTML = "1";
        changeText();
        return;
    }
    if ("÷".localeCompare(id.innerHTML, "pl") == 0) {
        document.getElementById("input").value += "/";
        document.getElementById("hidden").innerHTML = "1";
        changeText();
        return;
    }
    if ("−".localeCompare(id.innerHTML, "pl") == 0) {
        document.getElementById("input").value += "-";
        document.getElementById("hidden").innerHTML = "1";
        changeText();
        return;
    }
    if (id.innerHTML == "+")
        document.getElementById("hidden").innerHTML = "1";
    var rndm = document.getElementById("hidden").innerHTML;
    if (rndm == "0" || rndm == "1")
        document.getElementById("input").value += id.innerHTML;
    if (rndm == "2") {
        document.getElementById("input").value = id.innerHTML;
        document.getElementById("hidden").innerHTML = "0";
    }
    changeText();
}

function changeText() {
    document.getElementsByClassName("btnClear").item(0).innerHTML = "C";
}

function clearInput() {
    document.getElementById("input").value = "";
    document.getElementsByClassName("btnClear").item(0).innerHTML = "AC";
}

function clearLastInput() {
    var statement = document.getElementById("input").value;
    document.getElementById("input").value = statement.slice(0, -1);
}

function calculate(id) {
    var statement = id.value;
    var pattern1 = /\d[-+/*%](.|)\d/g;
    var pattern2 = /[0-9]+$/g;
    if (statement == "") {
        alert("Please enter an expression");
        return;
    }
    if (statement.match(pattern1)) {
        try {
            var result = eval(statement);
            id.value = result;
            document.getElementById("hidden").innerHTML = "2";
            return;
        } catch {
            alert("Please enter a valid expression");
            id.value = "";
            return;
        }
    }
    if (statement.match(pattern2)) {
        document.getElementById("hidden").innerHTML = "2";
        return;
    }
    alert("Please enter a valid expression");
    id.value = "";
}

document.addEventListener("keydown", (e) => {
    if (e.isComposing || e.keyCode === 229) {
        return;
    }
    if (e.key == "x") {
        document.getElementById("input").value += "*";
        document.getElementById("hidden").innerHTML = "1";
        changeText();
    } else if (e.key == "/" || e.key == "-" || e.key == "+") {
        document.getElementById("hidden").innerHTML = "1";
        var rndm = document.getElementById("hidden").innerHTML;
        if (rndm == "0" || rndm == "1")
            document.getElementById("input").value += e.key;
        else {
            document.getElementById("input").value = e.key;
            document.getElementById("hidden").innerHTML = "0";
        }
        changeText();
    } else if (e.key == "." || e.key == "(" || e.key == ")" || !isNaN(e.key)) {
        var rndm = document.getElementById("hidden").innerHTML;
        if (rndm == "0" || rndm == "1")
            document.getElementById("input").value += e.key;
        else {
            document.getElementById("input").value = e.key;
            document.getElementById("hidden").innerHTML = "0";
        }
        changeText();
    } else if (e.key == "=" || e.key == "Enter")
        calculate(document.getElementById("input"));
    else if (e.key == "Backspace")
        clearLastInput();
    else if (e.key == "Delete")
        clearInput();
});