const inputData = document.getElementById('inputData'); 
const calculateBtn = document.getElementById('calculateBtn'); 
const sortOption = document.getElementById('sortOption'); 
const outputData = document.getElementById('outputData'); 

// Функция для вычисления средней температуры
function calculateAverageTemperatures(data) {
    const sensorMap = {}; 
    for (let i = 0; i < data.length; i++) {
        const entry = data[i]; 
        const id = entry.slice(0, 2); 
        const temperature = parseInt(entry.slice(2), 10); 
        if (!sensorMap[id]) {
            sensorMap[id] = { sum: 0, count: 0 }; 
        }
        sensorMap[id].sum += temperature; 
        sensorMap[id].count += 1; 
    }
    const averages = []; 
    for (let id in sensorMap) {
        const average = (sensorMap[id].sum / sensorMap[id].count).toFixed(1); 
        averages.push({ id, average }); 
    }
    return averages; 
}

// Обработчик нажатия на кнопку
calculateBtn.onclick = function() {
    const data = inputData.value.trim(); 
    if (!data) {
        outputData.textContent = "Пожалуйста, введите данные."; 
        return; 
    }
    const sensorData = data.split('@'); 
    const averages = calculateAverageTemperatures(sensorData); 
    const sortBy = sortOption.value; 
    if (sortBy === 'id') {
        averages.sort((a, b) => a.id - b.id); 
    } else {
        averages.sort((a, b) => a.average - b.average); 
    }

    outputData.textContent = averages.map(item => `${item.id} ${item.average}`).join('\n'); 
    outputData.style.whiteSpace = "pre"; 
};
