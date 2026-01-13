function showResult() {
  const quiz = document.getElementById("quiz");
  const answers = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10"];
  const counts = {};

  // Підрахунок вибраних варіантів
  answers.forEach((q) => {
    const selected = quiz.querySelector(`input[name="${q}"]:checked`);
    if (selected) {
      counts[selected.value] = (counts[selected.value] || 0) + 1;
    }
  });

  // Перевірка, чи всі питання відповіли
  if (Object.values(counts).reduce((a, b) => a + b, 0) < answers.length) {
    document.getElementById("result").innerHTML =
      "<h2>Будь ласка, оберіть відповіді на всі питання!</h2>";
    return;
  }

  // Знаходимо максимальний вибір
  let max = 0;
  let animal = "";
  for (let key in counts) {
    if (counts[key] > max) {
      max = counts[key];
      animal = key;
    }
  }

  // Вивід результату
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<h2>Ваша тваринка: ${animal.toUpperCase()}</h2>`;
}
