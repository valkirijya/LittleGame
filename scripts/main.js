let gessNumber = Math.floor(Math.random() * 100);

function catchNumber() {
  let temperatureMessage = "";
  let suggestioNumber = document.getElementById("suggestNumber").value;
  if (suggestioNumber == gessNumber) {
    temperatureMessage = "Вы угадали!!!";
  } else {
    temperatureMessage =
      suggestioNumber >= gessNumber - 10 && suggestioNumber <= gessNumber + 10
        ? "Тепло"
        : "Холодно";
  }
  document.getElementById("tempMessage").innerHTML = temperatureMessage;
  document.getElementById("showSuggestionNumber").textContent = suggestioNumber;
}

function chеckingNumber() {
  let inputNumber = document.getElementById("inputNumber").value;
  let templ = /^[0-9]{1,2}$/;
  let correctingMessage;
  if (!templ.test(inputNumber)) {
    correctingMessage = "Введите целое число из одной или двух цыфр!";
  } else if (!(inputNumber == gessNumber)) {
    correctingMessage = "Попробуй еще!";
  } else {
    correctingMessage = "Ура! Ты угадал число!";
  }
  document.getElementById("correctingMessage").textContent = correctingMessage;
}

function restart() {
  gessNumber = Math.floor(Math.random() * 100);
  document.getElementById("tempMessage").innerHTML = "Выберите число";
  document.getElementById("correctingMessage").innerHTML = "";
  document.getElementById("inputNumber").value = "";
  document.getElementById("suggestNumber").value = "";
  document.getElementById("showSuggestionNumber").innerHTML = "";
}

