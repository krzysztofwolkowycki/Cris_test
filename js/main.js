
document.getElementById("go").onclick = function() {
    var name = document.getElementById("name").value;
    var el = document.getElementById("men");
    el.textContent = name +" " + "!";
}

document.getElementById("math").onclick = function () {
    var numberOne = parseFloat(document.getElementById("one").value);
    var numberTwo = parseFloat(document.getElementById("two").value);

    var elPlus = document.getElementById("plus");
    var elMinus = document.getElementById("minus");
    var elMnoz = document.getElementById("mnoz");
    var elDziel = document.getElementById("dziel");
    var elModulo = document.getElementById("modulo");

    elPlus.textContent = numberOne + numberTwo;
    elMinus.textContent = numberOne - numberTwo;
    elMnoz.textContent = numberOne * numberTwo;
    elDziel.textContent = numberOne / numberTwo;
    elModulo.textContent = numberOne % numberTwo;
}
document.getElementById("math2a").onclick = function () {
    var numberOne = Math.floor(Math.random()*20);
    var numberTwo = Math.floor(Math.random()*20);

    var elPlus = document.getElementById("plus2a");
    var elMinus = document.getElementById("minus2a");
    var elMnoz = document.getElementById("mnoz2a");
    var elDziel = document.getElementById("dziel2a");
    var elModulo = document.getElementById("modulo2a");

    elPlus.textContent = numberOne + numberTwo;
    elMinus.textContent = numberOne - numberTwo;
    elMnoz.textContent = numberOne * numberTwo;
    elDziel.textContent = numberOne / numberTwo;
    elModulo.textContent = numberOne % numberTwo;
}
document.getElementById("throw").onclick = function () {
    var number = Math.floor(Math.random()*6)+1;
    var elNumber = document.getElementById("numberHere");
    elNumber.innerHTML = number;
}

document.getElementById("throw2").onclick = function (numberFrom, numberTo) {
    var numberFrom = parseFloat(document.getElementById("from").value);
    var numberTo = parseFloat(document.getElementById("to").value);
    var number = Math.floor(Math.random() * (numberTo - numberFrom)) + numberFrom;
    var elNumber = document.getElementById("numberYour");
    elNumber.innerHTML = number;
}