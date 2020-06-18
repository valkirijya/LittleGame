let nr = 0;
restart(nr);

function cathNumber() {
  let message = "";
  let numberValue = document.getElementById("nr").value;
  message =
    numberValue >= nr - 10 && numberValue <= nr + 10 ? "Тепло" : "Холодно";
  if (numberValue == nr) {
    message = "<span class='win'>Вы угадали!!!</span>";
  }
  document.getElementById("rez1").textContent = massege;
  document.getElementById("gen").innerHTML = numberValue;
}

function displayNumbrer() {
  let numVal = document.getElementById("txt").value;
  let templ = /^[0-9]{1,2}$/;
  let messag = "";
  if (!templ.test(numVal)) {
    messag = "Введите целое число из одной или двух цыфр!";
  } else if (!(numVal == nr)) {
    messag = "Попробуй еще!";
  } else {
    messag = "Ура! Ты угадал число!";
  }
  document.getElementById("rez2").textContent = messag;
}

function restart() {
  nr = Math.floor(Math.random(nr) * 99);
  document.getElementById("rez1").innerHTML = "";
  document.getElementById("rez2").innerHTML = "";
  document.getElementById("txt").value = "";
  document.getElementById("nr").value = "";
  document.getElementById("gen").innerHTML = "";
}
