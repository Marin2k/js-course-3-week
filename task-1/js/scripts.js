// Обработка нажатия кнопки
const searchInput = document.getElementById('search');
const textInput = document.getElementById('textInput');
const resultDisplay = document.getElementById('result');
const countButton = document.getElementById('countButton');

// Алгоритм расчета количества вхождений строки в массив строк
function countOccurrences(searchString, textLines) {
    let count = 0;
    for (let i = 0; i < textLines.length; i++) { 
        let index = 0;
        while ((index = textLines[i].indexOf(searchString, index)) !== -1) { 
            count++;
            index++;
        }
    }
    return count;
}
// Обработчик событий
countButton.addEventListener('click', function() {
    const searchString = searchInput.value;
    const textLines = textInput.value.split('\n');
    const count = countOccurrences(searchString, textLines); 
    resultDisplay.textContent = count; 
});
