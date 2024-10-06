// Функция для расчета энтропии по Шеннону
function calculateShannonEntropy(text) {
  // Создаем объект для хранения частоты появления каждого символа
  const freq = {};
  // Подсчитываем частоту каждого символа в строке
  for (const char of text) {
      if (freq[char]) {
          freq[char] += 1; // Увеличиваем счетчик символа, если он уже существует
      } else {
          freq[char] = 1;  // Иначе добавляем символ с начальной частотой 1
      }
  }
  // Общее количество символов в строке
  const total = text.length; // Это нужно, чтобы рассчитать вероятность появления каждого символа
  // Инициализируем энтропию как 0
  let entropy = 0; // Она будет увеличиваться с каждым символом, вносящим вклад в энтропию
  // Рассчитываем энтропию по формуле Шеннона для каждого символа
  for (const count of Object.values(freq)) {
      const probability = count / total; // Вероятность появления символа (частота символа / общее количество символов)
      entropy -= probability * Math.log2(probability); // Применяем формулу: -p * log2(p), добавляем этот вклад в общую энтропию
  }
  // Проверяем, если значение энтропии стало NaN
  if (isNaN(entropy)) {
      return 0; // Пустая строка: энтропия равна 0
  }
  return entropy.toFixed(2); // Возвращаем округленное значение энтропии
}
// Обработчик события для кнопки
document.getElementById('calculateButton').addEventListener('click', () => {
  const inputText = document.getElementById('inputText').value; // Получаем текст из текстового поля с id "inputText"
  const entropy = calculateShannonEntropy(inputText); // Вызываем функцию для расчета энтропии, передавая введенный текст
  document.getElementById('result').innerText = `Энтропия: ${entropy}`; // Выводим результат расчета энтропии в блок с id "result"
});
