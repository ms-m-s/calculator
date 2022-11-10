function setInput(id) {
    if ("×".localeCompare(id.innerHTML, "pl") == 0) {
        document.getElementById("input").value += "*";
        changeText();
        return;
    }
    if ("÷".localeCompare(id.innerHTML, "pl") == 0) {
        document.getElementById("input").value += "/";
        changeText();
        return;
    }
    if ("−".localeCompare(id.innerHTML, "pl") == 0) {
        document.getElementById("input").value += "-";
        changeText();
        return;
    }
    document.getElementById("input").value += id.innerHTML;
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
            return;
        } catch {
            alert("Please enter a valid expression");
            id.value = "";
            return;
        }
    }
    if (statement.match(pattern2))
        return;
    alert("Please enter a valid expression");
    id.value = "";
}

document.addEventListener("keydown", (e) => {
    if (e.isComposing || e.keyCode === 229) {
        return;
    }
    if (e.key == "x") {
        document.getElementById("input").value += "*";
        changeText();
    }
    if (e.key == "/") {
        document.getElementById("input").value += e.key;
        changeText();
    }
    if (e.key == "-") {
        document.getElementById("input").value += e.key;
        changeText();
    }
    if (e.key == "+") {
        document.getElementById("input").value += e.key;
        changeText();
    }
    if (e.key == "(") {
        document.getElementById("input").value += e.key;
        changeText();
    }
    if (e.key == ")") {
        document.getElementById("input").value += e.key;
        changeText();
    }
    if (e.key == ".") {
        document.getElementById("input").value += e.key;
        changeText();
    }
    if (!isNaN(e.key)) {
        document.getElementById("input").value += e.key;
        changeText();
    }
    if (e.key == "=" || e.key == "Enter")
        calculate(document.getElementById("input"));
    if (e.key == "Backspace")
        clearLastInput();
    if (e.key == "Delete")
        clearInput();
});