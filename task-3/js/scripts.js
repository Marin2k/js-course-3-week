// Обработчик события для кнопки "Посчитать"
document.getElementById("calculate").onclick = handleCalculate;

// Функция для обработки нажатия на кнопку
function handleCalculate() {
    const input = document.getElementById("input").value; // Получаем данные из текстового поля
    const sortOrder = document.getElementById("sortOrder").value; // Получаем способ сортировки
    const output = document.getElementById("output"); // Получаем элемент для вывода
    const results = calculateAverages(input); // Рассчитываем средние температуры
    const sortedResults = sortResults(results, sortOrder); // Сортируем результаты
    output.innerText = sortedResults; // Выводим отсортированные результаты
}
// Функция для расчета средней температуры по датчикам
function calculateAverages(data) {
    const readings = data.split('@'); // Разделяем данные по символу '@'
    const results = {}; // Объект для хранения температур и их количества
    readings.forEach(reading => {
        const id = reading.slice(0, 2); // Извлекаем ID датчика
        const temp = parseInt(reading.slice(2), 10); // Извлекаем температуру
        // Проверяем, существует ли уже ID в results
        if (!results[id]) { // Если нет, инициализируем
            results[id] = { // Создаем новый объект для этого ID
                total: 0, // Начальная сумма температур
                count: 0  // Начальное количество показаний
            };
        }
        results[id].total += temp; // Суммируем температуры
        results[id].count++; // Увеличиваем счетчик
    });
    // Преобразуем объект в массив с ID и средней температурой
    return Object.entries(results).map(([id, values]) => {
        const averageTemp = values.total / values.count; // Рассчитываем среднюю температуру
        return { id, avgTemp: averageTemp }; // Возвращаем объект с ID и средней температурой
    });
}
// Функция для сортировки результатов
function sortResults(results, sortOrder) {
    // Сортируем результаты по ID или по средней температуре
    const sorted = results.sort((a, b) => {
        // Если выбран способ сортировки по ID
        if (sortOrder === "id") {
            return a.id - b.id; // Сравниваем ID
        }
        // Если выбран способ сортировки по средней температуре
        return a.avgTemp - b.avgTemp; // Сравниваем среднюю температуру
    });
    // Форматируем вывод
    const outputLines = []; // Создаем пустой массив для строк вывода
    // Проходим по каждому элементу и создаем строки с ID и средней температурой
    for (const item of sorted) {
        const line = item.id + " " + item.avgTemp.toFixed(1); // Форматируем строку
        outputLines.push(line); // Добавляем строку в массив
    }
    // Объединяем все строки через перевод строки
    return outputLines.join("\n"); // Возвращаем результат как одну строку
}
