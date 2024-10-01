function calculate(operator) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result;
    var history = JSON.parse(localStorage.getItem('history')) || [];

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                alert('No se puede dividir por cero.');
                return;
            }
            break;
        default:
            return;
    }

    document.getElementById('result').innerText = result;
    history.push(`${num1} ${operator} ${num2} = ${result}`);
    localStorage.setItem('history', JSON.stringify(history));
    displayHistory();
}

function displayHistory() {
    var history = JSON.parse(localStorage.getItem('history')) || [];
    var historyList = document.getElementById('history');
    historyList.innerHTML = '';

    for (var i = 0; i < history.length; i++) {
        var li = document.createElement('li');
        li.textContent = history[i];
        historyList.appendChild(li);
    }
}

function clearHistory() {
    localStorage.removeItem('history');
    displayHistory();
}

// Mostrar el historial al cargar la página
window.onload = displayHistory;

