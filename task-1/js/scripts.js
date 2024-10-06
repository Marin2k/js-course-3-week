const searchInput = document.getElementById('search'); // Поле для ввода искомой строки
const textInput = document.getElementById('textInput'); // Поле для ввода строк
const resultDisplay = document.getElementById('result'); // Элемент для отображения результата
const countButton = document.getElementById('countButton'); // Кнопка для подсчета

countButton.addEventListener('click', function() { // Добавляем обработчик события на кнопку
    const searchString = searchInput.value; // Считываем строку для поиска
    const textLines = textInput.value.split('\n'); // Разделяем введенные строки по новой строке
    let count = 0; // Счётчик вхождений

    // Перебираем каждую строку из введённых, пока i меньше количества строк
    for (let i = 0; i < textLines.length; i++) { 
        const line = textLines[i]; // Получаем текущую строку для анализа
        let index = 0; // Индекс для поиска в строке

        // Поиск вхождения искомой строки, пока индекс равен -1 (вхождение не найдено)
        while ((index = line.indexOf(searchString, index)) !== -1) { 
            count++; // Увеличиваем счётчик, если найдено вхождение
            index++; // Увеличиваем индекс, чтобы продолжить поиск с следующего символа
            // Продолжаем поиск, начиная с текущего индекса
        }
    }

    resultDisplay.textContent = count; // Обновляем текст с количеством вхождений
});
