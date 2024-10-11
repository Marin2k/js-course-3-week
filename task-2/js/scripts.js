// Функция для расчета энтропии по Шеннону
function calculateShannonEntropy(text) {
  const freq = {};
  for (const char of text) {
      if (freq[char]) {
          freq[char] += 1; 
      } else {
          freq[char] = 1;  
      }
  }
  const total = text.length; 
  let entropy = 0; 
  for (const count of Object.values(freq)) {
      const probability = count / total; 
      entropy -= probability * Math.log2(probability); 
  }
  if (isNaN(entropy)) {
      return 0; 
  }
  return entropy.toFixed(2); 
}

// Обработчик события для кнопки
document.getElementById('calculateButton').addEventListener('click', () => {
  const inputText = document.getElementById('inputText').value; 
  const entropy = calculateShannonEntropy(inputText); 
  document.getElementById('result').innerText = `Энтропия: ${entropy}`; 
});
